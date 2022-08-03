
import { EmojiSadIcon } from '@heroicons/react/outline';

export default function _404() {
    return (
        <div className="space-y-6 py-5 text-center">
            <div className="flex justify-center">
                <EmojiSadIcon className='w-14 h-14'/>
            </div>
            <h4 className="text-xl font-bold">This page is not available</h4>
            <h5 className="text-lg">The link you followed may be broken, or the page may have been removed.</h5>
            <p>
                <a href="/" className="text-indigo-500 font-bold hover:underline">
                    HOME PAGE
                </a>
            </p>
        </div>
    );
}