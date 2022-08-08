import { useState } from "react"

function Graph() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [site, setSite] = useState('')
  const [value, setValue] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  return (
    <form className="space-y-4 py-5 pl-4">
      <h2 className="text-xl font-bold">
      Open Graph Generator
      </h2>
    <div>
      <div className="">
    <input
        type="text" 
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Title"
      />
      </div>
      <div className="pt-4">
    <input
        type="text" 
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="URL" 
      />
      </div>
      <div className="pt-4">
      <input
          type="text"
          value={site}
          onChange={e => setSite(e.target.value)} 
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Site Name"
        />
        </div>
      <div className="pt-4">
      <select 
      value={value}
      onChange={e => setValue(e.target.value)} 
      className="mt-1 block w-full pl-3 pr-20 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value="article">Article</option> 
        <option value="book">Book</option> 
        <option value="books.author">Book Author</option> 
        <option value="books.genre">Book Genre</option> 
        <option value="business.business">Business</option> 
        <option value="fitness.course">Fitness Course</option> 
        <option value="music.album">Music Album</option> 
        <option value="music.musician">Music Musician</option> 
        <option value="music.playlist">Music Playlist</option> 
        <option value="music.radio_station">Music Radio Station</option> 
        <option value="music.song">Music Song</option> 
        <option value="object">Object (Generic Object)</option> 
        <option value="place">Place</option> 
        <option value="product">Product</option> 
        <option value="product.group">Product Group</option> 
        <option value="product.item">Product Item</option> 
        <option value="profile">Profile</option> 
        <option value="quick_election.election">Election</option> 
        <option value="restaurant">Restaurant</option> 
        <option value="restaurant.menu">Restaurant Menu</option> 
        <option value="restaurant.menu_item">Restaurant Menu Item</option> 
        <option value="restaurant.menu_section">Restaurant Menu Section</option> 
        <option value="video.episode">Video Episode</option> 
        <option value="video.movie">Video Movie</option> 
        <option value="video.tv_show">Video TV Show</option> 
        <option value="video.other">Video Other</option> 
        <option value="website">Website</option>
        </select>
        </div>
      <div className="pt-4">
        <input
        value={image}
        onChange={e => setImage(e.target.value)} 
        type="text"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Image Url"
        />
        </div>
        <div className="pt-4">
        <textarea 
        value={description}
        onChange={e => setDescription(e.target.value)} 
        placeholder="Description" 
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md">
        </textarea>
        </div>
        <div className="pt-4">
        </div>
        <div className="pt-4">
        <h2 className="font-bold">Result:</h2>
          <div className="shadow-sm p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md">
          <span>&lt;<span>meta</span> <span>property</span>=<span>"og:title"</span> <span>content</span>=<span>"{title}"</span>&gt;</span>
          <div>
          <span>&lt;<span>meta</span> <span>property</span>=<span>"og:site_name"</span> <span>content</span>=<span>"{site}"</span>&gt;</span>
          </div>
          <div>
          <span>&lt;<span>meta</span> <span>property</span>=<span>"og:url"</span> <span>content</span>=<span>"{url}"</span>&gt;</span>
          </div>
          <div>
          <span>&lt;<span>meta</span> <span>property</span>=<span>"og:type"</span> <span>content</span>=<span>"{value}"</span>&gt;</span>
          </div>
          <div>
          <span>&lt;<span>meta</span> <span>property</span>=<span>"og:image"</span> <span>content</span>=<span>"{image}"</span>&gt;</span>
          </div>
          <div>
          <span>&lt;<span>meta</span> <span>property</span>=<span>"og:description"</span> <span>content</span>=<span>"{description}"</span>&gt;</span>
          </div>
          </div>
        </div>
        <div className="pt-4">
        </div>
        <div className='pt-4'>
           <h1 className='text-3xl font-bold'>What is Open Graph?</h1>
           <p className='pt-2'>The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.</p>
           </div>
    </div>
    </form>
  )
}

export default Graph