import './App.css';
import { TwitterMenu } from './components/container-1/container';
import { TwitterContent } from './components/content/content';
import { TwitterHead } from './components/header/header';
import { TwitterFooter } from './components/IMPORTANT/import';
import { Twitterx } from './components/quebra/quebra';
import { BasicEnd } from './components/ultima-parte/ultima';



function App() {
 return(
  <div className="app">
  <TwitterMenu/>
  <main>
  <div className="Basic">
  <TwitterHead/>
  <BasicEnd/>
  </div>
  <Twitterx/>

  <TwitterContent/>

<TwitterFooter/>
  </main>
  </div>

  
  );

}

export default App

