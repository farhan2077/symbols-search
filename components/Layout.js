import React from "react";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <section className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </section>
    </Container>
  );
}
