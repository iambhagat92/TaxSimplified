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
      },
      {
        slug: "direct-vs-indirect-tax",
        title: "Direct vs Indirect Taxes: What is the Difference?",
        description: "Learn the core differences between the tax you pay directly and the tax you pay on goods.",
        content: `
          <p>When we talk about taxes, we often hear terms like "Direct Tax" and "Indirect Tax". But what do they actually mean? Understanding the difference is the first step towards financial literacy. In this guide, we will break down these concepts in simple English.</p>

          <h3>1. What is Direct Tax?</h3>
          <p>A <strong>Direct Tax</strong> is a tax that you pay directly to the government. It is levied on your income or wealth. The most important thing to remember about direct tax is that the burden cannot be shifted to someone else. You earn the money, so you pay the tax.</p>
          <p><strong>Common Examples:</strong></p>
          <ul>
            <li><strong>Income Tax:</strong> The tax you pay on your salary, business profits, or <a href="/income-types/interest-income-tax">interest income</a>.</li>
            <li><strong>Capital Gains Tax:</strong> Tax paid on the profit from selling assets like stocks or property. (Read more in our <a href="/income-types/capital-gains-tax">Capital Gains guide</a>).</li>
            <li><strong>Corporate Tax:</strong> Tax paid by companies on their profits.</li>
          </ul>

          <h3>2. What is Indirect Tax?</h3>
          <p>An <strong>Indirect Tax</strong> is a tax that is collected by an intermediary (like a store or service provider) from the person who bears the ultimate economic burden (the customer). You don't go to the government office to pay this; you pay it when you buy a product or service.</p>
          <p><strong>Common Examples:</strong></p>
          <ul>
            <li><strong>GST (Goods and Services Tax):</strong> The tax included in the price of your toothpaste, restaurant bill, or movie ticket.</li>
            <li><strong>Customs Duty:</strong> Tax on goods imported from other countries.</li>
            <li><strong>Excise Duty:</strong> Tax on the manufacture of goods closer to the factory gate.</li>
          </ul>

          <h3>Key Differences Table</h3>
          <table style="width:100%; border-collapse: collapse; margin-top: 20px; border: 1px solid #ddd;">
            <thead>
                <tr style="background-color: #f8f9fa;">
                    <th style="padding: 12px; border: 1px solid #ddd;">Feature</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Direct Tax</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Indirect Tax</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Who Pays?</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Individuals & Companies directly.</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">End consumers (through sellers).</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Transferable?</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">No, you must pay it yourself.</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Yes, liability passes to the buyer.</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Nature</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Progressive (Rich pay more).</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Regressive (Rich & Poor pay same).</td>
                </tr>
            </tbody>
          </table>

          <h3>Why Does This Matter?</h3>
          <p>Knowing the difference helps you plan your personal finance. While you can't easily reduce your Indirect Tax (unless you stop buying things), you <em>can</em> legally reduce your Direct Tax (Income Tax) by using <a href="/deductions/what-are-deductions">deductions and exemptions</a>.</p>
          <p>For example, investing in a PPF account reduces your Direct Tax liability, but buying a cheaper phone reduces your Indirect Tax payout.</p>
          
          <h3>Conclusion</h3>
          <p>Both taxes are essential for the nation's growth. Direct taxes ensure that people with higher ability contribute more, while indirect taxes ensure a steady revenue stream from consumption. As a <a href="/tax-fundamentals/who-needs-to-file-income-tax">responsible taxpayer</a>, your main focus should be on optimizing your Direct Tax liability through smart planning.</p>
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
      },
      {
        slug: "capital-gains-tax",
        title: "Capital Gains Tax Explained: LTCG vs STCG",
        description: "A comprehensive guide to taxes on profit from stocks, gold, and property.",
        content: `
          <p>One of the most misunderstood topics for beginners is <strong>Capital Gains Tax</strong>. Many people think tax is only for salary, but if you sell an asset for a profit, the government wants a share of that growth. This guide covers everything you need to know about Long Term (LTCG) and Short Term (STCG) capital gains.</p>

          <h3>What is Capital Gains?</h3>
          <p>Any profit or gain that arises from the sale of a "Capital Asset" is a Capital Gain. This gain is charged to tax in the year in which the transfer of the capital asset takes place.</p>
          <p><strong>Examples of Capital Assets:</strong></p>
          <ul>
            <li>Shares and mutual funds</li>
            <li>House property or land</li>
            <li>Gold and jewelry</li>
            <li>Paintings and art</li>
          </ul>

          <h3>Types of Capital Gains</h3>
          <p>The tax rate depends entirely on how long you held the asset before selling it. This period is called the <strong>Holding Period</strong>.</p>

          <h4>1. Short Term Capital Assets (STCA)</h4>
          <p>If you hold an asset for a short period, the profit is called Short Term Capital Gain (STCG).</p>
          <ul>
            <li><strong>Stocks/Equity Mutual Funds:</strong> Held for less than 12 months. Taxed at flat 15% (usually).</li>
            <li><strong>Property/Gold:</strong> Held for less than 36 months (reduced to 24 months for property in some recent updates). Taxed as per your <a href="/tax-fundamentals/tax-year-vs-assessment-year">normal income slab</a>.</li>
          </ul>

          <h4>2. Long Term Capital Assets (LTCA)</h4>
          <p>If you hold an asset for a long period, the profit is called Long Term Capital Gain (LTCG). The government often gives a lower tax rate to encourage long-term investing.</p>
          <ul>
             <li><strong>Stocks/Equity Mutual Funds:</strong> Held for more than 12 months. Taxed at 10% on gains exceeding ₹1 Lakh in a year.</li>
             <li><strong>Property/Gold:</strong> Held for more than 36 months. Taxed at 20% with "Indexation" benefits (which adjusts your purchase price for inflation).</li>
          </ul>

          <h3>The Magic of Indexation</h3>
          <p>For long-term assets like Property, you get the benefit of <strong>Indexation</strong>. This means you can inflate the purchase price of your property based on the government's Cost Inflation Index (CII). This significantly lowers your taxable profit.</p>
          <p><em>(Note: Rules for Debt Mutual Funds and some property scenarios have changed recently, so always check the latest Finance Act).</em></p>

          <h3>How to Save Capital Gains Tax?</h3>
          <p>Did you know you can avoid paying tax on property gains? If you sell a house and use the profit to buy another residential house (under Section 54), you can claim an exemption.</p>
          <p>However, you cannot just spend the money on a vacation! You must re-invest it strictly according to the rules. If you can't buy a new house immediately, you can deposit the money in a special <strong>Capital Gains Account Scheme (CGAS)</strong> at a bank to claim the exemption now and buy later.</p>

          <h3>Conclusion</h3>
          <p>Capital Gains tax can take a huge chunk of your profits if you aren't careful. Always track your buy dates and sell dates. Holding a stock for just one day longer can sometimes change the tax from 15% (STCG) to 10% (LTCG), saving you significant money! Don't forget to report these gains when you <a href="/tax-filing/filing-process-steps">file your tax return</a>.</p>
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
      },
      {
        slug: "section-80c-guide",
        title: "The Ultimate Guide to Section 80C (Save ₹1.5 Lakhs)",
        description: "The most popular tax-saving section explained in detail.",
        content: `
          <p>If you ask anyone "How do I save tax?", the first answer you'll get is <strong>"Section 80C"</strong>. It is the superhero of tax planning in India. Under this section, you can reduce your taxable income by up to <strong>₹1,50,000</strong> every year.</p>
          <p>In this guide, we will explore the best investment options under 80C, their returns, lock-in periods, and risk levels.</p>

          <h3>What is Section 80C?</h3>
          <p>Section 80C of the Income Tax Act allows you to claim a <a href="/deductions/what-are-deductions">deduction</a> for investments and expenses. This means if you earn ₹10 Lakhs and invest ₹1.5 Lakhs in 80C options, you only pay tax on ₹8.5 Lakhs.</p>

          <h3>Top 5 Section 80C Investments</h3>
          
          <h4>1. Public Provident Fund (PPF)</h4>
          <ul>
            <li><strong>Returns:</strong> ~7.1% (Guaranteed by Govt).</li>
            <li><strong>Lock-in:</strong> 15 Years (Partial withdrawal allowed).</li>
            <li><strong>Tax Status:</strong> EEE (Exempt on Investment, Interest, and Maturity).</li>
            <li><strong>Best For:</strong> Risk-averse, long-term savers.</li>
          </ul>

          <h4>2. ELSS Mutual Funds (Equity Linked Saving Scheme)</h4>
          <ul>
            <li><strong>Returns:</strong> 12-15% (Market linked, not guaranteed).</li>
            <li><strong>Lock-in:</strong> 3 Years (Shortest among all 80C options).</li>
            <li><strong>Tax Status:</strong> EET (Gains > ₹1L taxed as LTCG).</li>
            <li><strong>Best For:</strong> Young investors who want wealth creation.</li>
          </ul>

          <h4>3. Life Insurance Premiums</h4>
          <p>Any premium paid for life insurance policies (Term Plan, Endowment, ULIP) for yourself, spouse, or children counts under 80C.</p>
          <p><strong>Tip:</strong> Always buy a pure Term Insurance plan first. It gives high cover for low premium.</p>

          <h4>4. Employee Provident Fund (EPF)</h4>
          <p>The money deducted from your <a href="/income-types/salary-income-explained">salary</a> every month for PF is automatically counted under 80C. You don't need to do anything extra!</p>

          <h4>5. Tax Saving Fixed Deposits (FD)</h4>
          <ul>
            <li><strong>Returns:</strong> ~6-7%.</li>
            <li><strong>Lock-in:</strong> 5 Years.</li>
            <li><strong>Note:</strong> Interest earned is <a href="/income-types/interest-income-tax">fully taxable</a>, unlike PPF.</li>
          </ul>

          <h3>Expenses That Count as 80C</h3>
          <p>You don't always need to <em>invest</em> to save tax. Some expenses also count:</p>
          <ul>
            <li><strong>Tuition Fees:</strong> Fees paid for up to 2 children's education.</li>
            <li><strong>Home Loan Principal:</strong> The principal component of your EMI.</li>
          </ul>

          <h3>Common Strategy Mistakes</h3>
          <p>Don't wait until March to invest! This often leads to buying bad insurance policies just to save tax. Start in April. Also, remember that the ₹1.5 Lakh limit is <strong>combined</strong> for all these options. Investing ₹1 Lakh in PPF and ₹1 Lakh in ELSS won't give you ₹2 Lakhs deduction; it stays capped at ₹1.5 Lakhs.</p>

          <p>To save even more, you can look beyond 80C, such as <a href="/deductions/common-tax-saving-options">Health Insurance (80D)</a> or NPS (80CCD).</p>
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
      },
      {
        slug: "form-26as-explained",
        title: "What is Form 26AS? (Your Tax Passbook)",
        description: "Why you must check this document before filing your return.",
        content: `
          <p>Imagine filing your tax return, thinking you've done everything right, only to get a notice saying you missed an income. Scary, right? This happens when you don't check your <strong>Form 26AS</strong>.</p>
          
          <h3>What is Form 26AS?</h3>
          <p>Form 26AS is often called your "Annual Tax Statement". Think of it as a passbook that the Income Tax Department maintains for you. It contains details of:</p>
          <ul>
            <li>Tax Deducted at Source (TDS) by your employer.</li>
            <li>TDS by banks on your <a href="/income-types/interest-income-tax">interest income</a>.</li>
            <li>Advance Tax or Self-Assessment Tax you paid.</li>
            <li>High-value transactions (like buying a car or property).</li>
          </ul>

          <h3>Why is it Important?</h3>
          <p>When you file your <a href="/tax-filing/what-is-tax-return">Income Tax Return (ITR)</a>, you claim that you have already paid taxes (via TDS). The government verifies this claim by matching it with your Form 26AS.</p>
          <p><strong>The Golden Rule:</strong> If tax paid is not in 26AS, you won't get credit for it. Even if you have the salary slip proving TDS was cut!</p>

          <h3>How to Download Form 26AS?</h3>
          <ol>
            <li>Log in to the E-Filing Portal.</li>
            <li>Go to <strong>‘e-File’ > ‘Income Tax Return’ > ‘View Form 26AS’</strong>.</li>
            <li>You will be redirected to the TRACES website.</li>
            <li>Select the Assessment Year and download the PDF.</li>
          </ol>

          <h3>The New Cousins: AIS and TIS</h3>
          <p>Recently, the government introduced two more detailed statements:</p>
          <ul>
            <li><strong>AIS (Annual Information Statement):</strong> It includes everything in 26AS plus more details like mutual fund dividends, share trading, and interest credits.</li>
            <li><strong>TIS (Taxpayer Information Summary):</strong> A simplified summary of the AIS.</li>
          </ul>

          <p><strong>Strategy Steps:</strong></p>
          <ol>
            <li>Download your AIS and 26AS.</li>
            <li>Check if all your income is correctly listed.</li>
            <li>If you see an entry you don't recognize, submit feedback on the portal immediately.</li>
            <li>Only then proceed to <a href="/tax-filing/filing-process-steps">file your return</a>.</li>
          </ol>
          
          <h3>Conclusion</h3>
          <p>Filing tax without checking Form 26AS/AIS is like driving with a blindfold. It takes 5 minutes to check but saves you months of headache dealing with tax notices.</p>
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
