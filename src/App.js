import Navigation from "./header/header.jsx"    
import Navigation2 from "./header2/header2.jsx" 
import Navigation3 from "./header3/header3.jsx"  
import Content1 from "./Content1/Content1.jsx"
import Content2 from "./Content2/Content2.jsx" 
import Content3 from "./Content3/Content3.jsx" 
import News from "./News/news.jsx" 
import Footer from "./Footer/footer.jsx" 

function App() {
  return (
    <div className="App">
     <Navigation/>    
     <Navigation2/>  
     <Navigation3/> 
     <Content1/> 
     <Content2/> 
     <Content3/> 
     <News/>  
     <Footer/>         
    </div>
  );
}

export default App;