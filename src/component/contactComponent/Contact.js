import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default class ContactUs extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    content: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    this.setState({
      content: data,
    });
  };

  render() {
    console.log("State", this.state);
    return (
      <div className="container">
        <div className="wrapper">
          <h1>Contact Us Form</h1>
          <form className="form-group">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="enter name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="enter email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="enter phone"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <CKEditor
                editor={ClassicEditor}
                onInit={(editor) => {}}
                config={
                  {
                    ckfinder:{
                      uploadUrl:'/upload'
                    }
                  }
                }
                onChange={this.handleCkeditorState}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                name="submit"
                className="btn btn-secondary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
