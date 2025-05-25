import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-20 text-center px-4 bg-gradient-to-b from-yellow-200 to-yellow-50">
        <h1 className="text-5xl font-extrabold mb-4">Sesterzium</h1>
        <p className="text-xl italic mb-6">Panem, Circenses et Pump</p>
        <div className="space-x-4">
          <a href="#" className="bg-black text-white px-6 py-3 rounded-2xl shadow">Compra ora</a>
          <a href="#" className="text-black underline">View on BaseScan</a>
        </div>
      </section>

      {/* Cos'è Sesterzium */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Cos'è Sesterzium?</h2>
        <p className="mb-4">
          La prima meme coin nata dall'antica Roma e lanciata sulla rete più moderna dell’Impero: Base.
          Sesterzium è un esperimento decentralizzato, una moneta ironica ma seria, che unisce memetica e trasparenza su blockchain.
        </p>
      </section>

      {/* Tokenomics */}
      <section className="py-16 px-6 bg-yellow-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Tokenomics</h2>
        <div className="max-w-3xl mx-auto">
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-yellow-200">
              <tr>
                <th className="p-2 border">Allocazione</th>
                <th className="p-2 border">Percentuale</th>
                <th className="p-2 border">Dettagli</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Liquidity Pool</td>
                <td className="p-2 border">70%</td>
                <td className="p-2 border">Fair launch su DEX</td>
              </tr>
              <tr>
                <td className="p-2 border">Team & Dev</td>
                <td className="p-2 border">20%</td>
                <td className="p-2 border">Bloccati 12 mesi (vesting dopo 6)</td>
              </tr>
              <tr>
                <td className="p-2 border">Marketing & CEX</td>
                <td className="p-2 border">10%</td>
                <td className="p-2 border">Wallet pubblico e tracciabile</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-700">
            Nessun airdrop, nessun pre-sale. Massima trasparenza. Contratto verificato, LP bloccata, meme garantiti.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Roadmap – Via Appia del Successo</h2>
        <ul className="space-y-4 list-disc pl-6">
          <li><strong>Fase I – Nascita dell’Imperium:</strong> Deploy contratto, Website v1, Twitter/Telegram, Fair launch su Base.</li>
          <li><strong>Fase II – Panem, Circenses et Pump:</strong> Meme contest, collaborazioni gladiatorie, volume > 50k/die.</li>
          <li><strong>Fase III – Conquista del Forum:</strong> CoinGecko + CMC, mini-CEX, merchandising imperiale.</li>
          <li><strong>Fase IV – Roma Invicta:</strong> Governance memetica, NFT, candidatura CEX maggiore.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-yellow-100">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div>
            <h3 className="font-semibold">Sesterzium è uno scam?</h3>
            <p>No. È un progetto ironico ma trasparente. Nessun mint, nessun rug pull. Solo meme e gloria romana.</p>
          </div>
          <div>
            <h3 className="font-semibold">Dove posso comprarlo?</h3>
            <p>Su DEX nella rete Base. Link disponibile nella homepage appena lanciato.</p>
          </div>
          <div>
            <h3 className="font-semibold">Perché in latino?</h3>
            <p>Perché ogni impero ha la sua lingua ufficiale. Ave Sesterzium!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-8 bg-yellow-200">
        <p>© 2025 Sesterzium. Tutti i diritti riservati. | <a href="#" className="underline">Contatta il Senato</a></p>
      </footer>
    </main>
  );
}
