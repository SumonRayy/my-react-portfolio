import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in : <a href="https://www.linkedin.com/in/sumon-roy-29a2b3186">
                  {resumeData.linkedinId}</a>
                </h4><br/>
		<h4>Mail Me: <u>sumonroy070@gmail.com</u>
		</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
