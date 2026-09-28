
"use client";

import { useState } from "react";

export default function Home() {
  
  const [livros, setLivros] = useState([
    
  ]);

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState("");

  
  function cadastrarLivro(event) {
    event.preventDefault();

    const novoLivro = {
      id: Date.now(),
      titulo: titulo,
      autor: autor,
      preco: Number(preco),
    };

   
    setLivros([...livros, novoLivro]);

 
    setTitulo("");
    setAutor("");
    setPreco("");
  }

  return (
    <main className="min-h-screen bg-amber-800 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Cabeçalho */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-amber-200">
            BookStore
          </h1>

          <p className="mt-2 text-gray-100">
            Uma loja de livros
          </p>
        </header>

        {/* Lista de livros */}
        <section className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Livros disponíveis
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {livros.map((livro) => (
              <div
                key={livro.id}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-amber-200 text-5xl">
                  📖
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {livro.titulo}
                </h3>

                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Autor:</span>{" "}
                  {livro.autor}
                </p>

                <p className="mt-3 text-lg font-bold text-green-600">
                  R$ {livro.preco.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cadastro */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Cadastrar Livro
          </h2>

          <form
            onSubmit={cadastrarLivro}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {/* Título */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Título
              </label>

              <input
                type="text"
                placeholder="Digite o título do livro"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
                required
                className="w-full rounded-lg border text-gray-700 border-gray-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Autor */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Autor
              </label>

              <input
                type="text"
                placeholder="Digite o nome do autor"
                value={autor}
                onChange={(event) => setAutor(event.target.value)}
                required
                className="w-full rounded-lg border text-gray-700 border-gray-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Preço */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Preço
              </label>

              <input
                type="number"
                step="0.01"
                min="0"
                placeholder="0,00"
                value={preco}
                onChange={(event) => setPreco(event.target.value)}
                required
                className="w-full rounded-lg border text-gray-700 border-gray-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Botão */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white transition hover:bg-amber-700"
              >
                Cadastrar Livro
              </button>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
}
