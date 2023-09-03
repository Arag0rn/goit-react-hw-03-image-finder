import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {GlobalStyle} from "./GlobalStyle.styled"
import { FetchApi } from "./Fetch";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { ButtonMore } from "./Button/Button"; 
import { Modal } from "components/Modal/Modal";

export class App extends Component{
  state = {
    hits :[],
    total: 0,
    totalHits: 0,
    searchValue: null,
    loading: false,
    isModalOpen: false, 
    selectedImage: null,
    page: 1,
  }

  async componentDidMount(){
      window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  
  async componentDidUpdate(prevProps, prevState){
    
    if(prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page ){
      this.setState({loading: true});
      try {
        const {hits, totalHits} = await FetchApi(this.state.searchValue.split('/').pop(), this.state.page)
        this.setState(previousState => ({
          hits: [...previousState.hits, ...hits],
          page: 1,
          totalHits: totalHits
        }));
      } catch (error) {
        console.error("Error fetching data from API:", error);
        return null;
      }
      finally{ 
        this.setState({loading: false});
      }
  }
  }

  onLoadMore = () => {
    this.setState(previousState => ({
      page: previousState.page + 1,
    }));
  };
  
 
  onSearch = search => {
    
    this.setState( {
      searchValue: `${Date.now()}/${search}`
    })
   }

   handleImageClick = (imageUrl) => {
    console.log(imageUrl);
    this.setState({ selectedImage: imageUrl , isModalOpen: true});
};
   handleKeyPress = (e) => {
    if ( e.code === "Escape") {
      this.setState({isModalOpen: false});
    }
};

  render() {
    const { loading, isModalOpen, selectedImage, searchValue, totalHits} = this.state;  
    const appStyles = {
      display: "grid",
      gridTemplateColumns: "1fr", 
      gridGap: "16px", 
      paddingBottom: "24px", 
    };

    return (
      <div style={appStyles}>
        <Searchbar onSearch={this.onSearch}/>

        {searchValue !== '' &&(  <ImageGallery images={this.state.hits} 
                      onImageClick={this.handleImageClick}  
                      isModalOpen={isModalOpen}
        />)}
        {totalHits !== 0 && (<ButtonMore onLoadMore={this.onLoadMore}/>)} 
        <GlobalStyle />
        {isModalOpen && selectedImage && (
          <Modal selectedImage={selectedImage} />
        )}
        {loading && <Loader></Loader>}
    </div>
  );}
}
