function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>peoples</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
