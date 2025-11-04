import { useState, useEffect } from "react";

function App() {

  const [input, setInput] = useState();
  const [results, setResults] = useState();
  const [showResults, setShowResults] = useState(null);
  const [cache, setCache] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }

    const res = await fetch(`https://dummyjson.com/recipes/search?q=` + input);
    const data = await res.json();

    // console.log(data.recipes);
    setResults(data?.recipes);

    setCache((prev) => ({ ...prev, [input]: data?.recipes }))
  }

  useEffect(() => {

    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [input]);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setInput(recipe.name);
    setShowResults(false);
  };


  return (
    <div className="app">
      <h1>AutoComplete SearchBar</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          onChange={(e) => {
            setInput(e.target.value);
            setSelectedRecipe(null);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
          value={input}
        />

        {showResults && results.length > 0 && (
          <div className="results-container">
            {results.map((result) => (
              <div key={result.id} className="result-item" onMouseDown={() => handleSelectRecipe(result)}>
                {result.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {
        selectedRecipe && (
          <div className="recipe-details">
            <h2>{selectedRecipe.name}</h2>
            <p>Cuisine:{selectedRecipe.cuisine}</p>
          </div>
        )
      }
    </div >


  )
}

export default App
