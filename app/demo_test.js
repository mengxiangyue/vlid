const fse = require('fs-extra')
const fs = require('fs');
const path = require('path');


class FileNode {
  constructor(type, name, path) {
    this.type = type;
    this.name = name
    this.path = path
  }
}

class File extends FileNode {
  constructor(name, path) {
    super("file", name, path)
  }
}

class Folder extends FileNode {
  constructor(name, path) {
    super("folder", name, path)
    this.subNodes = []
  }
}

const rootFolderPath = '/Users/xiangyue/Documents/vlid/documentation/';
const rootFolder = new Folder("documentation", rootFolderPath);

function getFileTree(folder) {
  const folderPath = path.resolve(folder.path)
  try {
    const stats = fs.statSync(folderPath);
    if (!stats.isDirectory()) {
      return;
    }
    const files = fs.readdirSync(folderPath);
    files.forEach((filename) => {
      const filedir = path.join(folderPath, filename);
      const stat = fs.statSync(filedir)
      if (stat.isFile()) {
        const file = new File(filename, filedir)
        folder.subNodes.push(file)
        // console.log(folder)
      } else if (stat.isDirectory()) {
        const newFolder = new Folder(filename, filedir);
        folder.subNodes.push(newFolder)
        getFileTree(newFolder)
      }
    })
  } catch (err) {
    console.err(err);
  }


  // fs.stat(folderPath, (err, stats) => {
  //   if (err) {
  //     console.warn(folderPath);
  //     console.warn('获取文件stats失败');
  //     return;
  //   }
  //   if (!stats.isDirectory()) {
  //     return;
  //   }
  //   fs.readdir(folderPath, (innerErr, files) => {
  //     if (innerErr) {
  //       console.warn(folderPath);
  //       console.warn('read dir 失败');
  //       return;
  //     }
  //     files.forEach((filename) => {
  //       const filedir = path.join(folderPath, filename);
  //       const stat = fs.statSync(filedir)
  //       if (stat.isFile()) {
  //         const file = new File(filename, filedir)
  //         folder.subNodes.push(file)
  //         // console.log(filedir)
  //       } else if (stat.isDirectory()) {
  //         const newFolder = new Folder(filename, filedir);
  //         folder.subNodes.push(newFolder)
  //         getFileTree(newFolder)
  //       }
  //     })

  //   })
  // })
}

getFileTree(rootFolder)

console.log(rootFolder)



// 解析需要遍历的文件夹，我这以E盘根目录为例
const filePath = require('path').resolve(rootFolderPath);

// 调用文件遍历方法
// fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      // 遍历读取到的文件列表
      files.forEach(function (filename) {
        // 获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            var isFile = stats.isFile(); // 是文件
            var isDir = stats.isDirectory(); // 是文件夹
            if (isFile) {
              console.log(filedir);
            }
            if (isDir) {
              fileDisplay(filedir); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      });
    }
  });
}
