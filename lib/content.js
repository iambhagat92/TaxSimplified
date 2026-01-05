export const taxContent = {
    "tax-fundamentals": {
        title: "Tax Fundamentals",
        description: "Understand the basics of why, when, and how tax works.",
        articles: [
            {
                slug: "what-is-income-tax",
                title: "What Is Income Tax? (Beginner Explanation)",
                description: "A simple guide to understanding what income tax is and why it exists.",
                content: `
          <p>Imagine you live in a big shared house (your country). To keep the electricity running, the roads clean, and the security active, everyone who earns money contributes a small share. This contribution is called <strong>Income Tax</strong>.</p>
          <p>It is a percentage of your annual earnings that you pay to the government to help run the nation. It funds public services like:</p>
          <ul>
            <li>Infrastructure (Roads, Bridges, Trains)</li>
            <li>Defense (Army, Navy, Air Force)</li>
            <li>Public Health & Education</li>
          </ul>
        `
            },
            {
                slug: "why-do-we-pay-taxes",
                title: "Why Do We Pay Taxes?",
                description: "Explore the reasons behind paying taxes and how they benefit society.",
                content: `
          <p>Paying tax is not just a legal duty; it's a subscription fee for living in a civilized society. Without taxes, the government cannot maintain law and order or build new facilities.</p>
          <p class="note"><strong>Simple Analogy:</strong> Think of it like a maintenance fee in an apartment complex. If no one pays, the elevators stop working and the garbage piles up.</p>
        `
            },
            {
                slug: "who-needs-to-file-income-tax",
                title: "Who Needs to File Income Tax?",
                description: "Check if you fall under the taxable bracket or need to file a return.",
                content: `
          <p>Not everyone pays tax! You only pay if your income crosses a certain limit, called the <strong>"Basic Exemption Limit"</strong>.</p>
          <ul>
            <li>If you earn <strong>below</strong> this limit: You pay ₹0 tax.</li>
            <li>If you earn <strong>above</strong> this limit: You pay tax only on the extra amount.</li>
          </ul>
          <p>Even if you don't have to <em>pay</em> tax, you might still need to <em>file</em> a return (inform the government) if you want to claim a refund or apply for loans.</p>
        `
            },
            {
                slug: "tax-year-vs-assessment-year",
                title: "Tax Year vs Assessment Year Explained",
                description: "Clarifying the confusion between Financial Year and Assessment Year.",
                content: `
          <p>This confuses everyone! Let's clear it up.</p>
          <ul>
            <li><strong>Financial Year (FY):</strong> The year you <em>earned</em> the money. (e.g., April 1, 2024 to March 31, 2025).</li>
            <li><strong>Assessment Year (AY):</strong> The year you <em>file the papers</em> for that money. It is always the year <em>after</em> the FY.</li>
          </ul>
          <p>If you earned money in 2024-25 (FY), you file returns for it in 2025-26 (AY).</p>
        `
            },
            {
                slug: "consequences-of-not-filing",
                title: "What Happens If You Don’t File Tax?",
                description: "The risks and penalties of ignoring your tax duties.",
                content: `
          <p>Ignoring taxes can lead to trouble. Here is what might happen:</p>
          <ul>
            <li><strong>Penalties:</strong> You may have to pay a fine for late filing.</li>
            <li><strong>Interest:</strong> You will owe interest on the unpaid tax amount.</li>
            <li><strong>Notices:</strong> The tax department may send you a legal notice asking for an explanation.</li>
          </ul>
          <p><strong>Tip:</strong> Always file on time, even if you owe zero tax. It builds a good financial track record!</p>
        `
            }
        ]
    },
    "income-types": {
        title: "Types of Income",
        description: "Learn about the different sources of income that are taxable.",
        articles: [
            {
                slug: "types-of-income-explained",
                title: "Types of Income Explained Simply",
                description: "The 5 main heads of income you need to know about.",
                content: `
          <p>The government categorizes money into 5 buckets or "Heads of Income". You need to know which bucket your money falls into:</p>
          <ol>
            <li><strong>Salary:</strong> Monthly pay from a job.</li>
            <li><strong>House Property:</strong> Rent earned from a building you own.</li>
            <li><strong>Business/Profession:</strong> Profits from a shop, startup, or freelance work.</li>
            <li><strong>Capital Gains:</strong> Profit from selling stocks, gold, or a house.</li>
            <li><strong>Other Sources:</strong> Interest, lottery, gifts (the catch-all bucket).</li>
          </ol>
        `
            },
            {
                slug: "salary-income-explained",
                title: "Salary Income Explained with Example",
                description: "Breakdown of salary components and how they are taxed.",
                content: `
          <p>If you get a paycheck, you are a salaried employee. Your salary has different parts:</p>
          <ul>
            <li><strong>Basic Pay:</strong> The fixed core part.</li>
            <li><strong>HRA (House Rent Allowance):</strong> Money for paying rent.</li>
            <li><strong>Special Allowances:</strong> For transport, food, etc.</li>
          </ul>
          <p><strong>Example:</strong> Rohan earns ₹50,000/month. His annual salary income is ₹6,00,000. This entire amount isn't taxable; he gets some deductions first.</p>
        `
            },
            {
                slug: "freelance-income-rules",
                title: "Freelance Income: Basic Tax Rules",
                description: "Tax rules for freelancers, consultants, and gig workers.",
                content: `
          <p>Freelancers, YouTubers, and consultants fall under "Profits from Business or Profession".</p>
          <p><strong>The Good News:</strong> You can deduct your business expenses (internet, laptop, travel) from your income before paying tax. You only pay tax on the <em>Profit</em>, not the total <em>Revenue</em>.</p>
        `
            },
            {
                slug: "interest-income-tax",
                title: "Interest Income from Bank & FD",
                description: "Why your bank interest is not tax-free.",
                content: `
          <p>Many beginners forget this! The interest you earn in your Savings Account or Fixed Deposit (FD) is <strong>fully taxable</strong>.</p>
          <p>It gets added to your total income under "Income from Other Sources". However, there are small exemptions (like u/s 80TTA) that let you earn some savings interest tax-free up to a limit (e.g., ₹10,000).</p>
        `
            },
            {
                slug: "other-taxable-income",
                title: "Other Income You Didn’t Know Is Taxable",
                description: "Hidden income sources that might surprise you.",
                content: `
          <p>Be careful! These are also taxable:</p>
          <ul>
            <li><strong>Crypto Profits:</strong> Flat 30% tax in many regions.</li>
            <li><strong>Lottery/Betting Winnings:</strong> Flat high tax rate.</li>
            <li><strong>Gifts:</strong> Costly gifts from non-relatives might be taxed if they exceed a certain value (e.g., ₹50,000).</li>
          </ul>
        `
            }
        ]
    },
    "deductions": {
        title: "Deductions & Taxable Income",
        description: "How to legally reduce your tax liability.",
        articles: [
            {
                slug: "what-are-deductions",
                title: "What Are Tax Deductions?",
                description: "The concept of deductions explained for beginners.",
                content: `
          <p>A "Deduction" is a discount on your taxable income. The government encourages you to save money or spend on good things (like insurance) by lowering your tax.</p>
          <p><strong>Formula:</strong><br>
          <code>Total Income - Deductions = Taxable Income</code></p>
        `
            },
            {
                slug: "standard-deduction",
                title: "Standard Deduction Explained",
                description: "The flat tax relief available to salaried employees.",
                content: `
          <p>This is a flat discount given to all salaried employees and pensioners. You don't need to show any bills or proof.</p>
          <p>For example, if the Standard Deduction is ₹50,000, and you earn ₹6,00,000, the government assumes your income is only ₹5,50,000 for tax purposes.</p>
        `
            },
            {
                slug: "deduction-vs-exemption",
                title: "Deduction vs Exemption",
                description: "Key differences between two confusing tax terms.",
                content: `
          <p><strong>Exemption:</strong> Income that is removed from the start (e.g., HRA). It was never part of your taxable income.</p>
          <p><strong>Deduction:</strong> Income that is included first, but then subtracted later if you invest it (e.g., Life Insurance).</p>
        `
            },
            {
                slug: "common-tax-saving-options",
                title: "Common Tax Saving Options",
                description: "Popular investment vehicles to save tax.",
                content: `
          <p>Here are the most popular ways beginners save tax:</p>
          <ul>
            <li><strong>Life Insurance:</strong> Premium payments reduce tax.</li>
            <li><strong>PPF (Public Provident Fund):</strong> Long-term government savings.</li>
            <li><strong>ELSS Mutual Funds:</strong> Tax-saving investments.</li>
            <li><strong>Health Insurance:</strong> Premiums for you and parents.</li>
          </ul>
        `
            },
            {
                slug: "calculating-taxable-income",
                title: "How Taxable Income Is Calculated",
                description: "A step-by-step guide to doing the math.",
                content: `
          <ol>
            <li><strong>Step 1:</strong> Add all income (Salary + Interest + Freelance).</li>
            <li><strong>Step 2:</strong> Subtract Exemptions (like HRA).</li>
            <li><strong>Step 3:</strong> Subtract Standard Deduction.</li>
            <li><strong>Step 4:</strong> Subtract Investments/Deductions.</li>
            <li><strong>Result:</strong> Net Taxable Income. You calculate tax % on this number.</li>
          </ol>
        `
            }
        ]
    },
    "tax-filing": {
        title: "Tax Filing Basics",
        description: "Everything you need to know about filing your return.",
        articles: [
            {
                slug: "what-is-tax-return",
                title: "What Is a Tax Return?",
                description: "Understanding the ITR document.",
                content: `
          <p>An Income Tax Return (ITR) is a form you submit to the government stating: "This is how much I earned, and this is the tax I paid."</p>
          <p>It is your official declaration of income. Even if your employer deducted tax from your salary, you <strong>MUST</strong> file the return to complete the process.</p>
        `
            },
            {
                slug: "filing-process-steps",
                title: "Tax Filing Process Explained",
                description: "A walk-through of the filing procedure.",
                content: `
          <ol>
            <li>Log in to the official Request/Tax Portal.</li>
            <li>Select the correct Assessment Year.</li>
            <li>Choose the right Form (usually ITR-1 for salaried).</li>
            <li>Pre-fill data from your Form 16 (given by employer).</li>
            <li>Verify everything and click Submit.</li>
            <li><strong>Crucial:</strong> E-Verify using your OTP to finish.</li>
          </ol>
        `
            },
            {
                slug: "basic-tax-forms",
                title: "Basic Tax Forms Explained Simply",
                description: "Knowing which form to pick.",
                content: `
          <ul>
            <li><strong>Form 16:</strong> A certificate from your employer showing salary and tax deducted. You need this to file.</li>
            <li><strong>ITR-1 (Sahaj):</strong> The simplest form for salaried people with income &lt; ₹50 Lakhs.</li>
            <li><strong>ITR-4 (Sugam):</strong> For freelancers and small businesses.</li>
          </ul>
        `
            },
            {
                slug: "common-filing-mistakes",
                title: "Common Tax Filing Mistakes",
                description: "Errors to avoid when filing your return.",
                content: `
           <ul>
            <li><strong>Forgetting Interest Income:</strong> The most common error. Check your bank statement!</li>
            <li><strong>Choosing the Wrong Form:</strong> Using ITR-1 when you have capital gains.</li>
            <li><strong>Mismatch in Data:</strong> Your filed data doesn't match government records (AIS/TIS).</li>
          </ul>
        `
            },
            {
                slug: "correcting-tax-mistakes",
                title: "How to Correct a Simple Tax Mistake",
                description: "What to do if you filed incorrectly.",
                content: `
          <p>Found a mistake after clicking submit? Don't panic!</p>
          <p>You can file a <strong>"Revised Return"</strong>. It replaces your original return. You can fix errors like missed deductions or wrong income figures using this option without penalty if done within the deadline.</p>
        `
            }
        ]
    },
    "faqs": {
        title: "Beginner FAQs",
        description: "Common questions beginners ask about tax.",
        articles: [
            {
                slug: "is-tax-mandatory",
                title: "Is Income Tax Mandatory?",
                description: "Do you really have to pay?",
                content: "<p>Yes, if your income is above the basic exemption limit, it is mandatory by law.</p>"
            },
            {
                slug: "minimum-income-tax",
                title: "What Is the Minimum Income to Pay Tax?",
                description: "The threshold for paying tax.",
                content: "<p>It changes based on the regime, but generally, if you earn around ₹3 Lakhs to ₹7 Lakhs, you enter the tax net. (Check latest slab rates).</p>"
            },
            {
                slug: "student-taxpayer",
                title: "Can Students Be Taxpayers?",
                description: "Tax rules for students with income.",
                content: "<p>Role doesn't matter; income does. If a student earns ₹10 Lakhs from freelancing, they must pay tax.</p>"
            },
            {
                slug: "do-i-need-ca",
                title: "Do I Need a CA to File Tax?",
                description: "When to hire a professional.",
                content: "<p>No. For simple salary income, you can easily file it yourself online. CAs are needed for complex business audits.</p>"
            },
            {
                slug: "is-online-filing-safe",
                title: "Is Online Tax Filing Safe?",
                description: "Security of government tax portals.",
                content: "<p>Yes, the official government portal is secure. Always use strong passwords.</p>"
            }
        ]
    }
};
