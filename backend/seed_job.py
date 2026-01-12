import requests
import json

url = "http://localhost:8000/api/jobs"

payload = {
  "title": "GenAI Engineer",
  "location": "Hyderabad, India (occasional travel to client sites)",
  "job_type": "Contract to Hire",
  "experience": "2+ years of hands-on experience in Generative AI systems, with exposure to LLMs, SLMs, LangChain, LangSmith, and MCP. Candidates should have a deep understanding of GenAI application design and at least one end-to-end, production-deployed GenAI system.",
  "positions": 2,
  "compensation": "Market Competitive",
  "key_responsibilities": "Design and build GenAI-powered applications and AI agents\nWork on prompt engineering, orchestration, evaluation, and monitoring\nCollaborate with product and engineering teams to deliver production-ready solutions",
  "core_skills": "Strong experience with LLM- and agent-based architectures\nSolid Python development skills",
  "highly_desirable": "Full-stack development experience\nReact / modern frontend exposure",
  "is_active": True
}

headers = {
  'accept': 'application/json',
  'Content-Type': 'application/json'
}

try:
    response = requests.post(url, headers=headers, json=payload)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
