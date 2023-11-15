import { Form } from './components/Form';
import { WatchList } from './components/WatchList';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const watches = [
    {
      city: 'Minsk',
      timezone: 3
    },
    {
      city: 'Warsaw',
      timezone: 1
    }
  ];
  const [curWatches, setWatches] = useState(watches);
  const initialState = {
    city: '',
    timezone: ''
  }
  const [form, setForm] = useState(initialState);

  const addWatch = (event: React.FormEvent) => {
    event.preventDefault();

    setWatches(prevWatches => {

        if (form.city === '' || form.timezone === '') {
            return prevWatches;
        }
        else {
            return [...prevWatches, {
                city: form.city,
                timezone: Number(form.timezone)
            }];
        }
    });

    setForm(initialState);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setWatches(prevWatches => prevWatches.filter(item => item))
    }, 1000);
    
    return ():void => {
      clearInterval(interval);
    }
  }, []);

  const deleteWatch = (city: string) => {
    setWatches(prevWatches => {
        return prevWatches.filter(item => item.city !== city)
    });
  }

  return (
    <div className="container">
      <Form addWatch={addWatch} setForm={setForm} form={form}/>
      <WatchList watches={curWatches} onDelete={deleteWatch}/>
    </div>
  );
}

export default App;
