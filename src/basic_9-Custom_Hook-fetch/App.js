import React from 'react';
import usefetch from './UseFetch';

const App = () => {
  const { request, data, loading, error } = usefetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response);
    }
    fetchData();
  }, [request]);
  console.log(data);

  if (error) return <p>Erro</p>;
  if (loading) return <div>Carregando</div>;
  if (data)
    return (
      <div>
        <button>Inuyashiky</button>
        <button>Tate no Yusha</button>

        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
