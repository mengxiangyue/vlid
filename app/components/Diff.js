import React, { Component } from 'react';

type Props = {};
export default class Diff extends Component<Props>  {
  render() {
    return (
      <div style={{width: "100%", position: "relative"}}>
        <div className="d2h-file-list-wrapper">
          <div className="d2h-file-list-header">
            <span className="d2h-file-list-title">Files changed (1)</span>
            <a className="d2h-file-switch d2h-hide">hide</a>
            <a className="d2h-file-switch d2h-show">show</a>
          </div>
          <ol className="d2h-file-list">
            <li className="d2h-file-list-line">
              <span className="d2h-file-name-wrapper">
                <span><svg aria-hidden="true" className="d2h-icon d2h-changed" height={16} title="modified" version="1.1" viewBox="0 0 14 16" width={14}>
                    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z" />
                  </svg></span>
                <a href="#d2h-181345" className="d2h-file-name">Podfile</a>
                <span className="d2h-file-stats">
                  <span className="d2h-lines-added">+1</span>
                  <span className="d2h-lines-deleted">-15</span>
                </span>
              </span>
            </li>
          </ol>
        </div>
        <div className="d2h-wrapper">
          <div id="d2h-181345" className="d2h-file-wrapper" data-lang>
            <div className="d2h-file-header">
              <span className="d2h-file-name-wrapper">
                <span className="d2h-icon-wrapper"><svg aria-hidden="true" className="d2h-icon" height={16} version="1.1" viewBox="0 0 12 16" width={12}>
                    <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z" />
                  </svg></span>
                <span className="d2h-file-name">Podfile</span>
                <span className="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span></span>
            </div>
            <div className="d2h-files-diff">
              <div className="d2h-file-side-diff">
                <div className="d2h-code-wrapper">
                  <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-info" />
                        <td className="d2h-info">
                          <div className="d2h-code-side-line d2h-info">@@ -5,19 +5,5 @@ use_frameworks!</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          5
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn">target 'Marketplace_iOS' do</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          6
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn"> pod 'GoogleMaps'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          7
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn"> pod 'GooglePlaces'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          8
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'Kingfisher', '~&gt; 4.9.0'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del d2h-change">
                          9
                        </td>
                        <td className="d2h-del d2h-change">
                          <div className="d2h-code-side-line d2h-del d2h-change">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod '<del>Alamofire</del>'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          10
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'SnapKit'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          11
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'MJRefresh'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          12
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'SwiftHEXColors'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          13
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"># pod 'YLFileUploadLib', :path =&gt;
                              './YLFileUploadLib'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          14
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"># pod 'Toast-Swift', '~&gt; 3.0.1'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          15
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'Leanplum-iOS-SDK'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          16
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'AppsFlyerFramework'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          17
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'SwiftyJSON'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          18
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'YLBleLib', :path =&gt; './YLBleLib'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          19
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'Fabric'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          20
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'Crashlytics'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          21
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'AMPopTip', '~&gt; 3.4.0'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-del">
                          22
                        </td>
                        <td className="d2h-del">
                          <div className="d2h-code-side-line d2h-del">
                            <span className="d2h-code-line-prefix">-</span>
                            <span className="d2h-code-line-ctn"> pod 'lottie-ios'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          23
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn">end</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d2h-file-side-diff">
                <div className="d2h-code-wrapper">
                  <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-info" />
                        <td className="d2h-info">
                          <div className="d2h-code-side-line d2h-info" />
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          5
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn">target 'Marketplace_iOS' do</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          6
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn"> pod 'GoogleMaps'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          7
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn"> pod 'GooglePlaces'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-ins d2h-change">
                          8
                        </td>
                        <td className="d2h-ins d2h-change">
                          <div className="d2h-code-side-line d2h-ins d2h-change">
                            <span className="d2h-code-line-prefix">+</span>
                            <span className="d2h-code-line-ctn"> pod '<ins>Kingfisher</ins>'</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d2h-code-side-linenumber d2h-cntx">
                          9
                        </td>
                        <td className="d2h-cntx">
                          <div className="d2h-code-side-line d2h-cntx">
                            <span className="d2h-code-line-prefix"> </span>
                            <span className="d2h-code-line-ctn">end</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

