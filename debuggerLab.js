<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async Toggle Lab</title>
    <style>
        /* General styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
        }
        .main-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .lab-container {
            width: 90%;
            max-width: 600px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .highlighted {
            background-color: yellow;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0056b3;
        }
        #statusText {
            margin-top: 10px;
            font-weight: bold;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
        }
        .lecture-note {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        .lecture-note h3 {
            margin-top: 0;
        }
        .lecture-note pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    
    <div class="main-container">
        
        <header>
            <h1>Async Toggle Lab</h1>
            <p>Learn how to use async functions and classList in JavaScript!</p>
        </header>
        
        <div class="lab-container">
            <h1>Interactive Student Lab: Async Toggle</h1>
            <p>Click the button to toggle the yellow background after a 2-second delay. Great for debugging async code step-by-step!</p>
            <p id="togglePara">Click the button to highlight me!</p>
            <button id="asyncButton">Async Operation</button>
            <p id="statusText">Status: Ready</p>
            <script>
                const togglePara = document.getElementById('togglePara');
                const asyncButton = document.getElementById('asyncButton');
                const statusText = document.getElementById('statusText');
                let isHighlighted = false;
                asyncButton.addEventListener('click', async () => {
                    asyncButton.disabled = true;
                    statusText.textContent = "Status: Operation started...";
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    if (isHighlighted) {
                        togglePara.classList.remove('highlighted');
                        statusText.textContent = "Status: Highlight Removed";
                    } else {
                        togglePara.classList.add('highlighted');
                        statusText.textContent = "Status: Highlight Applied";
                    }
                    isHighlighted = !isHighlighted;
                    asyncButton.disabled = false;
                });
            </script>
        </div>
        <div>
            <h2>Understanding <code>classList</code></h2>
            <p><code>classList</code> provides methods to manipulate an element's class attributes.</p>
            
            <div>
                <h3>How it Works</h3>
                <ul>
                    <li><b>Adding a class:</b> <code>element.classList.add('className');</code></li>
                    <li><b>Removing a class:</b> <code>element.classList.remove('className');</code></li>
                    <li><b>Checking for a class:</b> <code>element.classList.contains('className');</code></li>
                    <li><b>Toggling a class:</b> <code>element.classList.toggle('className');</code></li>
                </ul>
            </div>
            <div>
                <h3>In the Lab Code</h3>
                <p><code>classList</code> toggles "highlighted" on the paragraph when the button is clicked.</p>
                <ol>
                    <li>If <code>isHighlighted</code> is true, remove the class.</li>
                    <li>If <code>isHighlighted</code> is false, add the class.</li>
                </ol>
            </div>
            <div>
                <h3>Benefits</h3>
                <ul>
                    <li>Simplicity</li>
                    <li>Readability</li>
                    <li>Safety</li>
                </ul>
            </div>
            <div>
                <h3>Example</h3>
                <pre>
                    <code>
                        &lt;p id="examplePara" class="initial"&gt;Example paragraph&lt;/p&gt;
                        &lt;script&gt;
                            const examplePara = document.getElementById('examplePara');
                            examplePara.classList.add('highlight');
                        &lt;/script&gt;
                    </code>
                </pre>
            </div>
        </div>
        <div class="lecture-note">
            <h2>Lecture Note: Arrow Functions, Promises, and Async/Await</h2>
            
            <h3>Arrow Functions (<code>=></code>)</h3>
            <p>Arrow functions provide a concise syntax for writing function expressions and lexically bind <code>this</code>.</p>
            
            <h4>Example 1: Basic Arrow Function</h4>
            <pre>
                <code>
                    // Traditional Function
                    function add(a, b) {
                        return a + b;
                    }
                    // Arrow Function Equivalent
                    const addArrow = (a, b) => a + b;
                    console.log(add(5, 3));       // Output: 8
                    console.log(addArrow(5, 3));  // Output: 8
                </code>
            </pre>
            
            <h4>Example 2: Arrow Function with One Argument</h4>
            <pre>
                <code>
                    // Traditional Function
                    function double(x) {
                        return x * 2;
                    }
                    // Arrow Function Equivalent
                    const doubleArrow = x => x * 2;
                    console.log(double(4));        // Output: 8
                    console.log(doubleArrow(4));   // Output: 8
                </code>
            </pre>
            <h4>What Problem Do They Solve?</h4>
            <p>Arrow functions solve the problems of <code>this</code> context confusion and verbose syntax.</p>
            
            <h3>Promises</h3>
            <p>A Promise represents the eventual completion (or failure) of an asynchronous operation.</p>
            
            <h4>Example 1: Creating a Simple Promise</h4>
            <pre>
                <code>
                    const myPromise = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve("Operation completed!");
                        }, 2000);
                    });
                    myPromise.then((result) => {
                        console.log(result);
                    });
                </code>
            </pre>
            
            <h4>Example 2: Handling Errors with Promises</h4>
            <pre>
                <code>
                    const myPromise = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject("Operation failed!");
                        }, 2000);
                    });
                    myPromise.then((result) => {
                    }).catch((error) => {
                        console.error(error);
                    });
                </code>
            </pre>
            
            <h3>Async/Await</h3>
            <p><code>async</code> and <code>await</code> make asynchronous code easier to write and read.</p>
            
            <h4>Example 1: Basic Async/Await</h4>
            <pre>
                <code>
                    async function fetchData() {
                        const promise = new Promise((resolve) => {
                            setTimeout(() => {
                                resolve("Data fetched!");
                            }, 2000);
                        });
                        const result = await promise;
                        console.log(result);
                    }
                    fetchData();
                </code>
            </pre>
            
            <h4>Example 2: Handling Errors with Async/Await</h4>
            <pre>
                <code>
                    async function fetchData() {
                        try {
                            const promise = new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    reject("Failed to fetch data!");
                                }, 2000);
                            });
                            const result = await promise;
                            console.log(result);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    fetchData();
                </code>
            </pre>
        </div>
        <h2>Additional Resources</h2>
        <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">MDN Web Docs: Element.classList</a></li>
            <li><a href="https://javascript.info/dom-nodes">JavaScript.info: DOM Nodes</a></li>
            <li><a href="https://www.freecodecamp.org/news/javascript-classlist/">FreeCodeCamp: Understanding classList in JavaScript</a></li>
        </ul>
    </div>
    <footer>
        <p>&copy; 2025 Professor Brown Interactive Student Lab Series</p>
    </footer>
</body>
</html>
