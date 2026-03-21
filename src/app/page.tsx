'use client';

import { useState } from 'react';

interface DePINProject {
  id: string;
  name: string;
  symbol: string;
  category: string;
  tvl: string;
  nodes: number;
  earnings24h: string;
  apr: number;
  status: 'active' | 'pending';
}

interface Node {
  id: string;
  location: string;
  status: 'online' | 'offline';
  uptime: number;
  earnings: string;
  lastSeen: string;
}

const projects: DePINProject[] = [
  { id: '1', name: 'Helium', symbol: 'HNT', category: 'Wireless', tvl: '$890M', nodes: 980000, earnings24h: '$2.4M', apr: 12.5, status: 'active' },
  { id: '2', name: 'Filecoin', symbol: 'FIL', category: 'Storage', tvl: '$2.1B', nodes: 4500, earnings24h: '$5.8M', apr: 8.2, status: 'active' },
  { id: '3', name: 'Render', symbol: 'RNDR', category: 'GPU', tvl: '$1.4B', nodes: 12000, earnings24h: '$3.2M', apr: 15.8, status: 'active' },
  { id: '4', name: 'IoTeX', symbol: 'IOTX', category: 'IoT', tvl: '$420M', nodes: 85000, earnings24h: '$890K', apr: 9.4, status: 'active' },
  { id: '5', name: 'Grass', symbol: 'GRASS', category: 'Bandwidth', tvl: '$180M', nodes: 2500000, earnings24h: '$1.2M', apr: 22.5, status: 'active' },
  { id: '6', name: 'Akash', symbol: 'AKT', category: 'Compute', tvl: '$340M', nodes: 8500, earnings24h: '$680K', apr: 11.2, status: 'active' },
];

const myNodes: Node[] = [
  { id: 'NODE-001', location: 'New York, US', status: 'online', uptime: 99.8, earnings: '$45.20', lastSeen: '2 min ago' },
  { id: 'NODE-002', location: 'London, UK', status: 'online', uptime: 98.5, earnings: '$38.50', lastSeen: '5 min ago' },
  { id: 'NODE-003', location: 'Tokyo, JP', status: 'offline', uptime: 92.1, earnings: '$12.80', lastSeen: '3 hours ago' },
];

const categories = ['All', 'Wireless', 'Storage', 'GPU', 'IoT', 'Bandwidth', 'Compute'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<DePINProject | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-cyan-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">DePIN Dashboard</h1>
          <p className="text-gray-400 mt-2">Decentralized Physical Infrastructure Networks</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-cyan-400 p-4 text-center">
            <div className="text-3xl font-black text-cyan-400">$5.3B</div>
            <div className="text-sm text-gray-400">Total TVL</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">3.6M+</div>
            <div className="text-sm text-gray-400">Active Nodes</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">$14.2M</div>
            <div className="text-sm text-gray-400">24h Earnings</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">6</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 border-cyan-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* DePIN Projects */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">DePIN Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Project</th>
                  <th className="text-right py-3">Category</th>
                  <th className="text-right py-3">TVL</th>
                  <th className="text-right py-3">Nodes</th>
                  <th className="text-right py-3">24h Earnings</th>
                  <th className="text-right py-3">APR</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`border-b border-gray-800 cursor-pointer hover:bg-gray-800 ${
                      selectedProject?.id === project.id ? 'bg-cyan-900/20' : ''
                    }`}
                  >
                    <td className="py-3">
                      <span className="font-bold text-cyan-400">{project.name}</span>
                      <span className="text-gray-500 ml-2">{project.symbol}</span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-1 text-xs font-bold bg-gray-800 text-gray-400">
                        {project.category}
                      </span>
                    </td>
                    <td className="py-3 text-right font-bold">{project.tvl}</td>
                    <td className="py-3 text-right">{project.nodes.toLocaleString()}</td>
                    <td className="py-3 text-right text-green-400">{project.earnings24h}</td>
                    <td className="py-3 text-right font-bold text-cyan-400">{project.apr}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Selected Project Details */}
        {selectedProject && (
          <section className="bg-gray-900 border-4 border-cyan-400 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-black text-cyan-400">{selectedProject.name}</h2>
                <p className="text-gray-400">{selectedProject.category} Infrastructure</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">TVL</div>
                <div className="text-2xl font-bold">{selectedProject.tvl}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Active Nodes</div>
                <div className="text-2xl font-bold">{selectedProject.nodes.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">24h Earnings</div>
                <div className="text-2xl font-bold text-green-400">{selectedProject.earnings24h}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">APR</div>
                <div className="text-2xl font-bold text-cyan-400">{selectedProject.apr}%</div>
              </div>
            </div>

            <button className="w-full py-4 bg-cyan-500 text-white font-bold border-4 border-cyan-400 hover:bg-cyan-400">
              Deploy Node
            </button>
          </section>
        )}

        {/* My Nodes */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">My Nodes</h2>
          <div className="space-y-3">
            {myNodes.map((node) => (
              <div key={node.id} className="p-4 bg-gray-800 border border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    node.status === 'online' ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                  <div>
                    <div className="font-bold text-cyan-400">{node.id}</div>
                    <div className="text-sm text-gray-400">{node.location}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Uptime</div>
                  <div className={`font-bold ${node.uptime >= 99 ? 'text-green-400' : node.uptime >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {node.uptime}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Earnings</div>
                  <div className="font-bold text-green-400">{node.earnings}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Last Seen</div>
                  <div className="text-xs">{node.lastSeen}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How DePIN Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How DePIN Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-cyan-400 mb-2">Deploy Hardware</h3>
              <p className="text-xs text-gray-400">Set up physical infrastructure</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Provide Service</h3>
              <p className="text-xs text-gray-400">Share bandwidth, compute, or storage</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Earn Rewards</h3>
              <p className="text-xs text-gray-400">Get paid in native tokens</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Scale Network</h3>
              <p className="text-xs text-gray-400">More nodes = stronger network</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-cyan-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
