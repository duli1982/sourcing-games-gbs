import { Game } from '../types';

/**
 * This is the central repository for all game challenges.
 * To add a new game to the weekly rotation, simply add a new object to this array.
 * The system will automatically pick it up and include it in the cycle.
 * Ensure each game has a unique `id`.
 */
export const games: Game[] = [
    {
        id: 'game1',
        title: 'Game 1: The Boolean Blacksmith',
        description: 'You have a new role: "Senior Backend Engineer" specializing in distributed systems, located in Vienna, Austria. The client requires experience with Go (Golang) and Kubernetes. They have a strong preference for candidates who have contributed to open-source projects.',
        task: 'Your task: Craft the most effective Boolean search string to find these candidates on a professional networking site.',
        placeholder: 'e.g., (engineer OR developer) AND ...',
        promptGenerator: (submission) => `
            You are an expert AI Sourcing Coach for recruiters. A participant has submitted the following Boolean search string for a 'Senior Backend Engineer' role in Vienna, Austria, with skills in Go (Golang), Kubernetes, and open-source contributions.
            
            Submission: "${submission}"
            
            Your task is to:
            1. Analyze the string for effectiveness, precision, and potential missed keywords.
            2. Provide a score out of 100. The score MUST be on its own line like this: SCORE: [number].
            3. Give 3 concrete, actionable tips for improvement in a bulleted list.
            4. Provide an improved version of their string.
            5. Format your response in simple markdown.
        `
    },
    {
        id: 'game2',
        title: 'Game 2: The Persona Profiler',
        description: 'Analyze the following job description snippet for a "Lead UX Designer" and create a concise candidate persona. Focus on key skills, experience level, and potential motivations.',
        context: `"We're seeking a Lead UX Designer to own the user experience for our flagship B2B SaaS product. You'll guide a team of 3 designers, work with product managers to translate complex requirements into intuitive workflows, and champion a user-centered design culture. Must have 7+ years of experience, a portfolio showcasing complex problem-solving, and proficiency in Figma. Experience with data visualization is a huge plus."`,
        task: 'Your task: Write a short candidate persona (3-4 sentences) that captures the essence of the ideal candidate.',
        placeholder: 'e.g., An experienced design leader motivated by mentoring...',
        promptGenerator: (submission) => `
            You are an expert AI Sourcing Coach. A participant has analyzed a job description for a "Lead UX Designer" and submitted a candidate persona.
            
            Job Description Snippet: "We're seeking a Lead UX Designer to own the user experience for our flagship B2B SaaS product. You'll guide a team of 3 designers, work with product managers to translate complex requirements into intuitive workflows, and champion a user-centered design culture. Must have 7+ years of experience, a portfolio showcasing complex problem-solving, and proficiency in Figma. Experience with data visualization is a huge plus."
            
            Submission: "${submission}"
            
            Your task is to:
            1. Evaluate how well the persona captures the key aspects of the role (leadership, experience, skills, motivation).
            2. Provide a score out of 100. The score MUST be on its own line like this: SCORE: [number].
            3. Give 2-3 concrete tips for making the persona more insightful.
            4. Format your response in simple markdown.
        `
    },
    {
        id: 'game3',
        title: 'Game 3: The Outreach Originator',
        description: "You've found a promising passive candidate for a \"Senior DevOps Engineer\" role. Her online profile shows she's been at her current company for 5 years and has spoken at a conference about \"Scaling CI/CD Pipelines\".",
        task: 'Your task: Write a concise and personalized outreach message (under 100 words) to this candidate to gauge her interest.',
        placeholder: 'e.g., Hi [Candidate Name], I was impressed by your talk on...',
        promptGenerator: (submission) => `
            You are an expert AI Sourcing Coach. A participant has written an outreach message to a passive "Senior DevOps Engineer" who has been at their company for 5 years and spoke at a conference about "Scaling CI/CD Pipelines". The message must be under 100 words.
            
            Submission: "${submission}"
            
            Your task is to:
            1. Analyze the message for personalization, clarity, conciseness, and effectiveness of the call-to-action.
            2. Provide a score out of 100. The score MUST be on its own line like this: SCORE: [number].
            3. Give 3 actionable tips for improving the outreach message.
            4. Provide an improved version of the message.
            5. Format your response in simple markdown.
        `
    },
    {
        id: 'game4',
        title: 'Game 4: The X-Ray Expert',
        description: 'You need to find Python developers in Berlin who have experience with Django and have profiles on GitHub. Standard searches are not yielding good results.',
        task: 'Your task: Write a Google X-ray search string to find user profiles on GitHub that match these criteria.',
        placeholder: 'e.g., site:github.com ...',
        promptGenerator: (submission) => `
            You are an expert AI Sourcing Coach specializing in technical sourcing. A participant has written a Google X-ray search string to find Python developers in Berlin with Django experience on GitHub.
            
            Submission: "${submission}"
            
            Your task is to:
            1. Evaluate the X-ray string for correctness, efficiency, and use of advanced operators.
            2. Provide a score out of 100. The score MUST be on its own line like this: SCORE: [number].
            3. Give 3 technical tips to refine the search string for better results.
            4. Provide an improved, more robust version of the string.
            5. Format your response in simple markdown.
        `
    }
];
