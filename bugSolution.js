```javascript
import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [effectRan, setEffectRan] = useState(false);

  const myEffect = useCallback(() => {
    if (!effectRan) {
      console.log('Effect ran!');
      setEffectRan(true);
    }
  }, [effectRan]);

  useEffect(myEffect, []); // Now only runs once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```