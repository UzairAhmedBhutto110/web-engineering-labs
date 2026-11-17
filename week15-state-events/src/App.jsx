
import { useState } from "react";
import "./App.css";

// ===============================
// ACTIVITY A: COUNTER
// ===============================
function Counter() {
  const [count, setCount] = useState(0);

  function addThree() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function handleClick() {
    console.log("Before:", count);
    setCount(count + 1);
    console.log("After:", count);
  }

  return (
    <section className="section">
      <h2>Activity A: Working Counter</h2>

      <div className="counter">{count}</div>

      <div className="actions">
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={addThree}>Add 3</button>
        <button onClick={handleClick}>Snapshot Test</button>
      </div>
    </section>
  );
}

// ===============================
// ACTIVITY B: CONTROLLED INPUT
// ===============================
function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <section className="section">
      <h2>Activity B: Controlled Search Box</h2>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something..."
      />

      <p>You typed: <strong>{query}</strong></p>
      <p>Characters: {query.length}</p>
    </section>
  );
}

// ===============================
// ACTIVITY C: SIGNUP FORM
// ===============================
function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const next = {};

    if (!form.name.trim()) {
      next.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      next.email = "Enter a valid email";
    }

    if (form.password.length < 8) {
      next.password = "Password must have at least 8 characters";
    }

    setErrors(next);
    setSuccess("");

    if (Object.keys(next).length > 0) return;

    console.log("Submitting:", form);
    setSuccess("Registration successful!");

    setForm({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <section className="section">
      <h2>Activity C: Signup Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Minimum 8 characters"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Sign Up</button>

        {success && <p className="success">{success}</p>}
      </form>
    </section>
  );
}

// ===============================
// HOMEWORK 1: TODO APPLICATION
// ===============================
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo(e) {
    e.preventDefault();

    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTask("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <section className="section">
      <h2>Homework 1: To-do Application</h2>

      <form onSubmit={addTodo}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="actions">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("done")}>Done</button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className={todo.done ? "completed" : ""}
            >
              {todo.done ? "☑" : "☐"} {todo.text}
            </span>

            <button
              className="delete"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Remaining tasks: <strong>{remaining}</strong></p>
    </section>
  );
}

// ===============================
// HOMEWORK 2: MULTI-STEP FORM
// ===============================
function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  }

  function nextStep() {
    if (step === 1 && !form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (step === 2 && !form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    setStep((s) => s + 1);
  }

  function previousStep() {
    setError("");
    setStep((s) => s - 1);
  }

  function submitForm(e) {
    e.preventDefault();

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    console.log("Final form:", form);
    alert("Multi-step registration completed!");

    setStep(1);
    setForm({ name: "", email: "", password: "" });
    setError("");
  }

  return (
    <section className="section">
      <h2>Homework 2: Multi-step Form</h2>

      <p>Step {step} of 3</p>

      <form onSubmit={submitForm}>
        {step === 1 && (
          <>
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </>
        )}

        {step === 2 && (
          <>
            <label>Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </>
        )}

        {step === 3 && (
          <>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 8 characters"
            />
          </>
        )}

        {error && <p className="error">{error}</p>}

        <div className="actions">
          {step > 1 && (
            <button type="button" onClick={previousStep}>
              Previous
            </button>
          )}

          {step < 3 ? (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </section>
  );
}

// ===============================
// FINAL PROJECT: PRODUCT CATALOGUE
// ===============================
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 85000 },
  { id: 2, name: "Mobile Phone", category: "Electronics", price: 45000 },
  { id: 3, name: "Headphones", category: "Electronics", price: 5000 },
  { id: 4, name: "T-Shirt", category: "Clothing", price: 1500 },
  { id: 5, name: "Shoes", category: "Clothing", price: 4000 },
  { id: 6, name: "Notebook", category: "Books", price: 300 },
];

function ProductCatalogue() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="section">
      <h2>Final Project: Interactive Product Catalogue</h2>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />

      <label>Filter by category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
      </select>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>Rs. {product.price.toLocaleString()}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>No products found.</p>
      )}

      <h3>Shopping Cart ({cart.length})</h3>

      {cart.map((item, index) => (
        <div className="cart-item" key={`${item.id}-${index}`}>
          <span>{item.name} - Rs. {item.price.toLocaleString()}</span>
          <button className="delete" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: Rs. {total.toLocaleString()}</h3>
    </section>
  );
}

// ===============================
// MAIN APP
// ===============================
function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>Week 15: React State & Events</h1>
        <p>React Web Engineering Lab</p>
        <p>useState | Events | Controlled Inputs</p>
      </header>

      <Counter />
      <SearchBox />
      <SignupForm />
      <TodoApp />
      <MultiStepForm />
      <ProductCatalogue />

      <footer>
        <p>React State & Events Lab - Completed</p>
      </footer>
    </main>
  );
}

export default App;
