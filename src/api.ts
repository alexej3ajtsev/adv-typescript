import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({ accessKey: "f9ea6072f807f090fd93b093521062e737b0067e5d9360b3fcde9555a3e6cc90" });

export interface UnsplashTag { title: string; type: string }
export interface UnsplashUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  instagram_username?: string;
  profile_image: {
    large: string;
    medium: string;
    small: string;
  },
  total_collections: number;
  total_likes: number;
  total_photos: number;
  location?: string;
}

export interface UnsplashItem {
  alt_description: string;
  categories: any[];
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string | null;
  height: number;
  width: number;
  id: string;
  liked_by_user: boolean;
  likes: number
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: string | null;
  sponsorship: any;
  tags: UnsplashTag[];
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  user: UnsplashUser
}

export const getCats = ():Promise<UnsplashItem[]> => {
  return new Promise((resolve) => {
    unsplash.search.photos('cats')
      .then(response => response.json())
      .then((photos) => {
        return resolve(photos.results)
      })
      .catch(error => {
        console.log(error.message);
        return resolve([])
      })
  })
}

export const getHumans = ():Promise<UnsplashItem[]> => {
  return new Promise((resolve) => {
    unsplash.search.photos('person')
      .then(response => response.json())
      .then((photos) => {
        return resolve(photos.results)
      })
      .catch(error => {
        console.log(error.message);
        return resolve([])
      })
  })
}

export const getBuildings = ():Promise<UnsplashItem[]> => {
  return new Promise((resolve) => {
    unsplash.search.photos('buildings')
      .then(response => response.json())
      .then((photos) => {
        return resolve(photos.results)
      })
      .catch(error => {
        console.log(error.message);
        return resolve([])
      })
  })
}