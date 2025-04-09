import React, { useEffect } from 'react';

const FacebookPagePlugin = () => {
  useEffect(() => {
    // Check if FB is available and parse XFBML
    const loadFacebookPlugin = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    };

    // Wait for FB SDK to load
    if (!window.FB) {
      window.fbAsyncInit = loadFacebookPlugin;
    } else {
      loadFacebookPlugin();
    }
  }, []);

  return (
    <div>
      <div className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=61570960087464"
        data-width="400"
        data-height="400"
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="false">
      </div>
    </div>
  );
};

export default FacebookPagePlugin;