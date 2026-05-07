/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Cpu, 
  Database, 
  CheckCircle2, 
  Compass, 
  Calendar, 
  Users, 
  Settings, 
  MessageSquare,
  TrendingUp,
  Heart,
  BarChart3,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="py-12 px-6 border-b border-neutral-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Layers size={24} />
              </div>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Strategic Planning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
              智能体建设规划
            </h1>
            <p className="mt-4 text-neutral-500 max-w-xl text-lg font-medium leading-relaxed">
              聚焦平台工具建设（载体）与数据分析场景（内容）两大维度，打造全场景 AI 智能体体系。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex items-center gap-6"
          >
            <div className="text-right">
              <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Active Phase</span>
              <span className="text-xl font-bold font-mono text-neutral-900">V1.0 → V2.0</span>
            </div>
            <div className="h-12 w-[1px] bg-neutral-200" />
            <div className="text-right">
              <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Timeline</span>
              <span className="text-xl font-bold font-mono text-blue-600 uppercase">May-June 2026</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Section 1: Platform Tools */}
          <motion.section 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-900 rounded-md text-white">
                <Cpu size={20} />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">平台工具建设 <span className="text-neutral-400 font-normal ml-2">（载体）</span></h2>
            </div>

            {/* V1.0 Card */}
            <motion.div variants={fadeInUp} className="group relative bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
              <div className="absolute top-6 right-6 flex items-center gap-2 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-bold">
                <CheckCircle2 size={12} /> 已建设
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-600">
                  <Settings size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-neutral-900">V1.0：固定场景解读</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                    基于固定业务场景的 AI 智能解读，提供标准化数据洞察。
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      <span className="block text-xs font-bold text-neutral-900 mb-1">案例</span>
                      <p className="text-sm text-neutral-600">财务主题的AI财务分析</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                    <Calendar size={14} /> 2026 Q1 完成
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Builders Card */}
            <motion.div variants={fadeInUp} className="bg-neutral-100 p-6 rounded-2xl border border-neutral-200 border-dashed">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-neutral-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">建设单位</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-neutral-900">科技团队</span>
                  <div className="h-4 w-[1px] bg-neutral-300" />
                  <span className="text-sm text-neutral-500 italic">智能体通用能力建设</span>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Section 2: Data Scenarios */}
          <motion.section 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-900 rounded-md text-white">
                <Database size={20} />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">数据分析场景 <span className="text-neutral-400 font-normal ml-2">（内容）</span></h2>
            </div>

            {/* Existing Scenarios */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={fadeInUp} className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center gap-3">
                <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                  <Heart size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-neutral-400 uppercase">Exist</span>
                  <span className="font-bold text-neutral-900">员工幸福指数</span>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-neutral-400 uppercase">Exist</span>
                  <span className="font-bold text-neutral-900">销售队伍分析</span>
                </div>
              </motion.div>
            </div>

            {/* Planned Scenarios */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <TrendingUp size={120} />
              </div>
              <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">Next Horizons</span>
                <h3 className="text-xl font-bold mt-2 text-neutral-900">规划建设场景库</h3>
                <p className="text-neutral-500 text-sm mt-2 font-medium">深度覆盖核心业务链路，提供多维洞察</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['投入产出分析', '队伍效能评估', '薪酬激励模型', '更多场景探索...'].map((item, idx) => (
                  <span key={item} className={`px-4 py-2 rounded-full text-sm font-bold border ${idx === 3 ? 'border-dashed text-neutral-400 bg-neutral-50 border-neutral-200' : 'bg-neutral-50 border-neutral-200 text-neutral-700'}`}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-orange-900 leading-none mb-1">规划时间</p>
                  <p className="text-xs text-orange-700 font-medium">需结合具体业务规划时间动态确定</p>
                </div>
              </div>
            </motion.div>

            {/* Collaboration Card */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-neutral-200">
               <div className="flex items-center gap-3 mb-4">
                  <Users size={18} className="text-neutral-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">建设分工</span>
                </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="block text-xs font-bold text-blue-600 uppercase mb-2">业务方</span>
                  <p className="text-sm font-bold text-neutral-900 leading-snug">场景分析思路输入、效果验证与数据授权</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="block text-xs font-bold text-green-600 uppercase mb-2">科技方</span>
                  <p className="text-sm font-bold text-neutral-900 leading-snug">模型调优、能力建设与安全合规隔离</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

        </div>

        {/* New Section: Business Support Requirements */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 pt-16 border-t border-neutral-200"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">需业务侧关键支持</h2>
            <p className="text-neutral-500 mt-3 font-medium">智能体成功落地需要业务专家的深度参与和体系化支撑</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900">业务场景分析思路输入</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                如：投产、薪酬、队伍等场景下业务场景一般需要如何分析。通过“喂养”行业专家经验，赋能智能体深度理解核心业务逻辑。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900">智能体准确性验证</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                智能体建设完成后，业务主创团队需共同验证 AI 模型的输出准确性。基于真实业务反馈进行迭代式模型调优。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900">数据授权与隐私保护</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                人资相关合规数据的使用权限需明确授权。在确保数据安全与隐私前提下，将其授权给特定智能体调用以驱动智能分析。
              </p>
            </div>
          </div>
        </motion.section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase">System Operational</span>
          </div>
          <p className="text-sm text-neutral-500 font-medium tracking-tight">
            © 2026 Agent Construction Roadmap • Building the Future of Data Intelligence
          </p>
        </div>
      </footer>
    </div>
  );
}
