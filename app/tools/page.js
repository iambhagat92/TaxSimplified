'use client';

import { useState } from 'react';

export default function ToolsPage() {
    // Calculator 1 State
    const [income, setIncome] = useState('');
    const [deductions, setDeductions] = useState('');
    const [taxResult, setTaxResult] = useState(null);

    // Calculator 2 State
    const [monthly, setMonthly] = useState('');
    const [salaryResult, setSalaryResult] = useState(null);

    const calculateTax = () => {
        const inc = parseFloat(income) || 0;
        const ded = parseFloat(deductions) || 0;
        const net = Math.max(0, inc - ded);

        // Simplified Logic
        let tax = 0;
        if (net > 1200000) {
            tax += (net - 1200000) * 0.20 + 300000 * 0.15 + 300000 * 0.10 + 300000 * 0.05;
        } else if (net > 900000) {
            tax += (net - 900000) * 0.15 + 300000 * 0.10 + 300000 * 0.05;
        } else if (net > 600000) {
            tax += (net - 600000) * 0.10 + 300000 * 0.05;
        } else if (net > 300000) {
            tax += (net - 300000) * 0.05;
        }

        setTaxResult({ net, tax });
    };

    const calculateSalary = () => {
        const mon = parseFloat(monthly) || 0;
        const annual = mon * 12;
        const taxable = annual * 0.8; // Educational estimate
        setSalaryResult({ annual, taxable });
    };

    return (
        <div className="container">
            <h1>Free Tax Tools</h1>
            <p>Use these simple calculators to estimate your taxes. <em>(For educational use only)</em></p>

            {/* Tool 1 */}
            <div className="tool-box">
                <h3>1. Simple Income Tax Calculator</h3>
                <div className="form-group">
                    <label>Annual Income (₹):</label>
                    <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g. 800000" />
                </div>
                <div className="form-group">
                    <label>Total Deductions (₹):</label>
                    <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} placeholder="e.g. 150000" />
                </div>
                <button className="btn" onClick={calculateTax}>Calculate Tax</button>

                {taxResult && (
                    <div className="result-box">
                        <p><strong>Net Taxable Income:</strong> ₹{taxResult.net.toLocaleString()}</p>
                        <p><strong>Estimated Tax:</strong> ₹{taxResult.tax.toLocaleString()}</p>
                    </div>
                )}
            </div>

            {/* Tool 2 */}
            <div className="tool-box">
                <h3>2. Salary Breakdown Tool</h3>
                <div className="form-group">
                    <label>Monthly Salary In-Hand (₹):</label>
                    <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="e.g. 50000" />
                </div>
                <button className="btn" onClick={calculateSalary}>Show Annual Breakdown</button>

                {salaryResult && (
                    <div className="result-box">
                        <p><strong>Annual Package (Approx):</strong> ₹{salaryResult.annual.toLocaleString()}</p>
                        <p><strong>Likely Taxable Portion:</strong> ~₹{salaryResult.taxable.toLocaleString()}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
