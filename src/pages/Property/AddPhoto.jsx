import React from 'react';

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

class AddPhoto extends React.Component {
  state = {
    images: [{ name: '', file: '', featured: false }],
    count: 0,
    isUploadStarted: false,
    isUploadCompleted: false,
    countOfUploads: 0,
    uploadFailures: [],
  };

  handleImageFileChange = (e, idx) => {
    e.preventDefault();

    const updatedFile = this.state.images.map((image, sidx) => {
      if (idx !== sidx) return image;
      return { ...image, file: e.target.files[0] };
    });
    this.setState({
      images: updatedFile,
    });
  }

  handleImageNameChange = (e, idx) => {
    e.preventDefault();
    const updatedName = this.state.images.map((image, sidx) => {
      if (idx !== sidx) return image;
      return { ...image, name: e.target.value };
    });
    this.setState({
      images: updatedName,
    });
  }

  handleFeaturedSelect = (e, idx) => {
    const updatedFeatured = this.state.images.map((image, sidx) => {
      if (idx !== sidx) return { ...image, featured: false };
      return { ...image, featured: e.target.checked };
    });
    this.setState({
      images: updatedFeatured,
    });
  }

  addOneMoreImage = (e) => {
    e.preventDefault();
    this.setState({
      images: this.state.images.concat([{ name: '', file: '', featured: false }]),
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { images } = this.state;
    this.setState({
      isUploadStarted: true,
      count: images.length,
    });

    await asyncForEach(images, async (image, idx) => {
      const data = new FormData();
      data.append('file', image.file);
      data.append('filename', image.name);
      data.append('propertyId', this.props.match.params.propertyId);
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/upload`, {
        method: 'POST',
        body: data,
      });
      if (response.status !== 200) {
        this.state.uploadFailures.push(image.file.name);
      }
      this.setState({
        countOfUploads: idx + 1,
      });
    });

    this.setState({
      isUploadStarted: true,
      isUploadCompleted: true,
    });
  }

  showUploadProgress = () => (
    <div>
      {
        this.state.isUploadCompleted ?
          <p>Upload done</p> :
          <p>Uploading {this.state.countOfUploads} of {this.state.count}</p>
      }
      <p>Failed uploads: {this.state.uploadFailures.join(', ')}</p>
    </div>
  );

  render() {
    return (
      <main className="pri-pad">
        <div className="container">
          <h3 className="mb-30">Add Photos of a Property</h3>

          <form className="property-submit">
            { this.state.images.map((image, idx) => (
              <div className="row mb-55" key={idx}>
                <div className="form-group col-sm-4 mb-30">
                  <input type="file" id={`imagefile-${idx}`} onChange={e => this.handleImageFileChange(e, idx)} />
                </div>
                <div className="form-group col-sm-4 mb-30">
                  <input type="text" id={`imagename-${idx}`} value={image.name} onChange={e => this.handleImageNameChange(e, idx)} />
                </div>
                <div className="form-group col-sm-4 mb-30">
                  <input type="radio" name="featured" id="featured" radioGroup="featured" checked={image.featured} onChange={e => this.handleFeaturedSelect(e, idx)} />
                </div>
              </div>
            )) }

            <div className="row mb-55">
              <div className="form-group col-sm-4 mb-30">
                <button
                  type="button"
                  onClick={this.addOneMoreImage}
                  className="btn btn-success btn-lg shadow faa-parent animated-hover"
                  disabled={this.state.isUploadStarted ? 'disabled' : ''}
                >
                  Add Image
                </button>
              </div>

              <div className="form-group col-sm-4 mb-30">
                <button
                  type="button"
                  onClick={this.handleSubmit}
                  className="btn btn-success btn-lg shadow faa-parent animated-hover"
                  disabled={this.state.isUploadStarted ? 'disabled' : ''}
                >
                  Upload Images
                </button>
              </div>
            </div>
          </form>

          {
            this.state.isUploadStarted && this.showUploadProgress()
          }

        </div>
      </main>
    );
  }

}

export default AddPhoto;
