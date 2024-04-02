const Root = () => {
  return (
    <div>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div className="flex gap-5">
          <form id="search-form" role="search">
            <input className=" border-2 border-green-800 rounded-md px-2 " id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit" className=" bg-red-400 px-5 text-white text-xl rounded-md">
              New
            </button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </div>
  );
};

export default Root;
