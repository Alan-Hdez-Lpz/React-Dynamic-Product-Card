import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import headphonesImg from './assets/headphones.jpg';
import smartwatchImg from './assets/smartwatch.jpg';
import speakerImg from './assets/speaker.jpg';

const App = () => {
  const products = [
    {
      title: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      price: 199.99,
      image: headphonesImg,
    },
    {
      title: 'Smart Watch',
      description: 'Track fitness, notifications, and more.',
      price: 149.99,
      image: smartwatchImg,
    },
    {
      title: 'Portable Speaker',
      description: 'Bluetooth speaker with amazing sound.',
      price: 89.99,
      image: speakerImg,
    },
  ];
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default App;
