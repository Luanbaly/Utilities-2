import React from 'react'
import { SketchPicker, SliderPicker } from 'react-color';
  class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '139',
      g: '16',
      b: '254',
      a: '1',
    },
  };

  handleClose = () => {
    this.setState({ displayColorPicker: true })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
    return (
      <form className='space-y-4 py-5 pl-10'>
        <h1 className="text-xl font-bold">Color Picker</h1>
        <div>
            <div className='flex'>
                <div >
          <SketchPicker className="cursor-pointer" width='316px'
          color={ this.state.color } onChange={ this.handleChange } handleChangeComplete={ this.handleChangeComplete}/>
        <div className='pt-4'>
          <SliderPicker className="cursor-pointer" color={ this.state.color } onChange={ this.handleChange } />
          </div>
          </div>
        <div className="flex-initial w-full" >
        <div className="pt-5 w-full" >
            <div className='flex pl-10'>
       <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
       RGBA:
        </span>
            <p 
            className="flex-1 border rounded-none border-gray-300 shadow pt-1 pb-1 pl-2 text-gray-500">
            {this.state.color.r}, {this.state.color.g}, {this.state.color.b}, {this.state.color.a} 
                      </p>
                      </div>
                      </div>
                    </div>
                    </div>
                    </div>
                <div >
            </div>
    </form> 
    )
  }
}

export default SketchExample