import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce solution with advanced filtering and seamless checkout experience.",
    image: "/Screenshot (188).png",
    tags: ["Next.js", "Node.js", "ShadCn", "Clerk"],
    live: "https://shop-y-git-main-partho221s-projects.vercel.app/",
    github: "https://github.com/Partho2006/ShopY",
    category: "web"
  },

];

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'design', label: 'Design' }
  ];

  return (
    <section id="projects" className="min-h-screen py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-white transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-white/60 hover:text-white transition-colors duration-300">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A selection of recent projects showcasing creativity, technical expertise, and attention to detail
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <Button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              variant={filter === filterItem.key ? "default" : "outline"}
              className={`${filter === filterItem.key
                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black'
                : 'border-white/20 text-black hover:bg-white/30'
                } backdrop-blur-sm transition-all duration-300`}
            >
              {filterItem.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="h-[500px] bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-47 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <CardContent className="px-4 flex flex-col flex-1 justify-between">
                  <div
                    className={`transition-transform duration-500 ${hoveredProject === project.id ? "-translate-y-1" : "translate-y-4"
                      }`}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-2 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links row (pinned bottom, appear only on hover) */}
                  <div
                    className={`flex gap-6 items-center text-sm font-medium mt-4 transition-opacity duration-500  
                      ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className='border border-white/20 rounded-full py-2 px-4 hover:border-white transition-all duration-300'>
                      <Link
                        href={project.live}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Link>
                    </div>
                    <div className="border border-white/20 rounded-full py-2 px-4 hover:border-white transition-all duration-300">
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Link>
                    </div>
                  </div>
                  <div className='flex md:hidden'>
                    <div className='border border-white/20 rounded-full py-2 px-4 hover:border-white transition-all duration-300'>
                      <Link
                        href={project.live}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Link>
                    </div>
                    <div className="border border-white/20 rounded-full py-2 px-4 hover:border-white transition-all duration-300">
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}