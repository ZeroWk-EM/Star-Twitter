import React from "react";
import Feed from "./components/FeedOption/Feed";
import Trend from "./components/Trend/Trend";
import news from "./database/news";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-3 mt-4">{<Feed />}</div>
          <div className="col-12 col-md-6 mt-4">
            {news.map((item) => {
              return (
                <Card
                  author={item.author}
                  content={item.content}
                  reply={item.reply}
                  liked={item.liked}
                  share={item.share}
                />
              );
            })}
          </div>
          <div className="col-12 col-md-3 mt-4">{<Trend />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
