import React, { useState } from 'react';
import { Database, Search, UserPlus, Trash, Sparkles, Filter, BarChart, Check } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  cgpa: number;
  year: number;
}

export default function CampusSyncDashboard() {
  const [students, setStudents] = useState<Student[]>([
    { id: 'ST-001', name: 'Rajan Kumar', email: 'rajansukul19@gmail.com', department: 'Computer Science & Design', cgpa: 7.36, year: 2026 },
    { id: 'ST-002', name: 'Kunal Sharma', email: 'kunal@example.com', department: 'Electrical Engineering', cgpa: 8.12, year: 2025 },
    { id: 'ST-003', name: 'Anjali Verma', email: 'anjali@example.com', department: 'Computer Science', cgpa: 6.94, year: 2026 },
    { id: 'ST-004', name: 'Rohit Deshmukh', email: 'rohit@example.com', department: 'Mechanical Engineering', cgpa: 7.82, year: 2024 },
  ]);

  const [search, setSearch] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newDept, setNewDept] = useState('Computer Science & Design');
  const [newCgpa, setNewCgpa] = useState(7.5);
  const [newYear, setNewYear] = useState(2026);
  const [alertMsg, setAlertMsg] = useState('');

  const currentYear = new Date().getFullYear();

  const addStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) {
      alert('Kindly provide complete student name and email!');
      return;
    }

    const newId = `ST-00${students.length + 1}`;
    const newStudent: Student = {
      id: newId,
      name: newName,
      email: newEmail,
      department: newDept,
      cgpa: parseFloat(newCgpa.toString()),
      year: newYear,
    };

    setStudents([newStudent, ...students]);
    setNewName('');
    setNewEmail('');
    setAlertMsg('Student successfully appended to PostgreSQL mock transactional stack!');
    setTimeout(() => setAlertMsg(''), 3000);
  };

  const removeStudent = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // Filter students
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase()) || 
    s.department.toLowerCase().includes(search.toLowerCase())
  );

  // SVG metrics analytics
  const totalStudentsCount = students.length;
  const averageCgpa = students.reduce((sum, s) => sum + s.cgpa, 0) / (totalStudentsCount || 1);

  // Group by department counts for simple SVG chart
  const deptCounts: Record<string, number> = {};
  students.forEach(s => {
    deptCounts[s.department] = (deptCounts[s.department] || 0) + 1;
  });

  return (
    <div id="campussync-dashboard" className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-slate-950/20">
      {/* Title */}
      <div className="p-5 border-b border-white/5 bg-gradient-to-r from-emerald-950/30 to-slate-900 flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2.2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Database className="w-5 h-5 text-glow-cyan animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold tracking-tight text-white text-base">CampusSync Database Console</h3>
            <p className="text-xs text-slate-400">Simulated student record registry utilizing real-time states and indexations.</p>
          </div>
        </div>
        <div className="text-[10px] font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/25 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>PostgreSQL (Active Sim)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
        {/* SQL Entry Form */}
        <div className="lg:col-span-4 bg-slate-900/40 border border-white/5 rounded-2xl p-5 space-y-4">
          <span className="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
            <UserPlus className="w-4 h-4 text-emerald-400" />
            Append New Records
          </span>

          <form onSubmit={addStudent} className="space-y-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Student Name</label>
              <input
                type="text"
                placeholder="Rajan Kumar"
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Academic Email</label>
              <input
                type="email"
                placeholder="rajan@institution.edu"
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-855 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Department Selection</label>
              <select
                value={newDept}
                onChange={(e) => setNewDept(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-slate-400 outline-none transition-colors"
              >
                <option value="Computer Science & Design">Computer Science & Design</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 border border-white/5 rounded-xl p-2 bg-slate-950/30">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Target CGPA</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  required
                  value={newCgpa}
                  onChange={(e) => setNewCgpa(parseFloat(e.target.value))}
                  className="w-full bg-transparent border-0 text-xs text-slate-200 font-mono outline-none text-center font-bold"
                />
              </div>

              <div className="space-y-1 border border-white/5 rounded-xl p-2 bg-slate-950/30">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Graduation Year</label>
                <input
                  type="number"
                  min="2020"
                  max="2035"
                  required
                  value={newYear}
                  onChange={(e) => setNewYear(parseInt(e.target.value))}
                  className="w-full bg-transparent border-0 text-xs text-slate-200 font-mono outline-none text-center font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs text-center rounded-xl cursor-pointer duration-200 transition-colors flex items-center justify-center gap-1"
            >
              <UserPlus className="w-4 h-4" />
              Commit Transaction (INSERT)
            </button>
          </form>

          {alertMsg && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-2 animate-fade-in text-center justify-center">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{alertMsg}</span>
            </div>
          )}
        </div>

        {/* Database Searchable Table & Custom Summary Dashboard */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          {/* Quick aggregates and search row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-4">
            <div className="relative w-full max-w-xs">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search index database SQL stacks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-550 outline-none transition-colors"
              />
            </div>

            <div className="flex gap-4 text-xs font-mono">
              <div className="text-right">
                <span className="text-[10px] text-slate-550 block text-slate-500">AVG STUDENT CGPA</span>
                <span className="font-extrabold text-slate-200 font-mono">{averageCgpa.toFixed(2)} / 10</span>
              </div>
              <div className="w-[1px] h-8 bg-slate-800" />
              <div className="text-right flex flex-col justify-between">
                <span className="text-[10px] text-slate-550 block text-slate-500">INDEX REGISTRATION</span>
                <span className="font-extrabold text-emerald-400 text-right">{totalStudentsCount} Student records</span>
              </div>
            </div>
          </div>

          {/* Database Table view */}
          <div className="overflow-x-auto border border-white/5 rounded-xl bg-slate-950/60 leading-normal">
            <table className="w-full text-left text-xs text-slate-400">
              <thead className="text-[10px] bg-slate-900 text-slate-500 uppercase tracking-widest font-mono">
                <tr>
                  <th className="px-4 py-3 border-b border-slate-800">Student ID</th>
                  <th className="px-4 py-3 border-b border-slate-800">Name</th>
                  <th className="px-4 py-3 border-b border-slate-800">Department</th>
                  <th className="px-4 py-3 border-b border-slate-800 text-center">CGPA</th>
                  <th className="px-4 py-3 border-b border-slate-800 text-center">Grad</th>
                  <th className="px-4 py-3 border-b border-slate-800 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500 italic">
                      Zero matching records returned by SQL query index.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((stud) => (
                    <tr key={stud.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="px-4 py-3 font-mono text-[11px] text-cyan-400 font-bold">{stud.id}</td>
                      <td className="px-4 py-3 text-slate-100 font-bold">
                        <div>{stud.name}</div>
                        <div className="text-[10px] text-slate-500 font-normal font-mono">{stud.email}</div>
                      </td>
                      <td className="px-4 py-3 text-[11px]">{stud.department}</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-emerald-400">{stud.cgpa.toFixed(2)}</td>
                      <td className="px-4 py-3 text-center">{stud.year}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => removeStudent(stud.id)}
                          title="Delete Record"
                          className="p-1 px-2.5 text-slate-500 hover:text-rose-400 cursor-pointer duration-150 rounded hover:bg-rose-500/15"
                        >
                          <Trash className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Quick Department Distribution SVG bar representation */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono flex items-center gap-1">
              <BarChart className="w-3.5 h-3.5" />
              Dynamic Class Split Metrics
            </span>
            <div className="p-4 bg-slate-950/40 rounded-xl border border-white/5 space-y-3">
              {Object.entries(deptCounts).map(([deptName, count], idx) => {
                const percentage = (count / totalStudentsCount) * 100;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-350 truncate">{deptName}</span>
                      <span className="text-slate-450 font-mono font-bold">{count} ({percentage.toFixed(0)}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full transition-all duration-300" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
