```javascript
// pages/about.js
import {ErrorBoundary} from 'next/error-boundary';

function MyErrorBoundary({error}) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function About() {
  // This will cause an error if not handled
  throw new Error('Intentional error for demonstration');
}

export function getStaticProps() {
  return {
    props: {}
  };
}

function AboutPage(){
  return (
      <ErrorBoundary fallback={<MyErrorBoundary/>}>
        <About/>
      </ErrorBoundary>
  );
}
export default AboutPage; 
```