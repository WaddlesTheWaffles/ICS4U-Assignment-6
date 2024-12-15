import { useState } from 'react'
import { useStoreContext } from "../context";
import HeaderSection from '../Components/HeaderSection.jsx'
import FooterSection from '../Components/FooterSection.jsx'
import GenresList from "../Components/Genres"
import GenreView from './GenreView.jsx'
import DetailView from './DetailView.jsx'
import "./MoviesView.css"

function MoviesView() {
   const { genreList, setGenreList } = useStoreContext();

   const [genreSelected, setGenreSelected] = useState(genreList[0].id); //Uses the first movie in the list as a default
   const [movieIdClicked, setMovieIdClicked] = useState(912649); //Uses Venom last dance as default movie
   const [detailViewDisplayed, setdetailViewDisplayed] = useState(false);
   const [clickedFromFeature, setClickedFromFeature] = useState(false);

   function setGenreId(genre) {
      setGenreSelected(genre);
      setdetailViewDisplayed(false)
   }

   function setMovieIdValue(movie) {
      setMovieIdClicked(movie)
      setClickedFromFeature(false)
      setdetailViewDisplayed(true)
   }

   function returnToGenreView() {
      setdetailViewDisplayed(false)
   }

   return (
      <div>
         <HeaderSection />
         <div className='welcomeTitle'>
            <h1>Welcome</h1>
         </div>
         <div className='genreSection'>
            <div className='genreList' >
               <GenresList selectGenreId={setGenreId} genresList={genreList} genreSelected={genreSelected} />
            </div>
            <div className='genreView' >
               {detailViewDisplayed ?
                  <DetailView movieId={movieIdClicked} backToGenre={returnToGenreView} clickedFromFeature={clickedFromFeature} />
                  : <GenreView genreId={genreSelected} enterDetailView={setMovieIdValue} />}
            </div>
         </div>
         <FooterSection />
      </div>
   )
}

export default MoviesView