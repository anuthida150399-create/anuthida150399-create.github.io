# Content Structure Plan - Personal CV Website

## 1. Material Inventory

**Content Source:**
- User provided resume data for "Miss Anuthida Wanseng"
- **Key Data Points:**
  - **Profile:** Name, Job Title (Web/UI/UX Design), Location (Thailand)
  - **Contact:** Email, Phone, LinkedIn/GitHub (placeholders)
  - **Education:** BS Computer Science, RMUTT (2027)
  - **Skills:** Hardworking, Punctual, Social, etc.
  - **Interests:** Music (Pop, K-Pop), Sports (Badminton, Taekwondo)
  - **Visuals:** Profile photo needed, project thumbnails needed

## 2. Website Structure

**Type:** SPA (Single Page Application)
**Reasoning:**
- Content volume is low (single resume).
- Linear storytelling works best for CVs (Intro -> Skills -> Experience -> Contact).
- "Download CV" and "Contact" actions are primary.

## 3. Page/Section Breakdown

**Visual Asset Column Rules:**
- **[OK] Content Images**: Profile photo, project screenshots.
- **[X] Decorative Images**: Background patterns, abstract shapes (handled in Design Spec).

### Page 1: Home (Single Page)

**Purpose**: Showcase professional profile and attract internship offers.

| Section | Component Pattern | Data Source | Content to Extract | Visual Asset (Content ONLY) |
| :--- | :--- | :--- | :--- | :--- |
| **Hero** | Hero Pattern (Split) | User Input | Name: "Anuthida Wanseng"<br>Title: "Aspiring Web & UI/UX Designer"<br>Tagline: "Computer Science Student @ RMUTT"<br>CTAs: "Download CV", "Contact Me" | `imgs/profile_photo.jpg` (Placeholder) |
| **About** | 2-Column Text | User Input | Bio: "Seeking IT Internship. Passionate about design and technology."<br>Attributes: Punctual, Patient, Social, Hardworking, Cooperative. | - |
| **Skills** | Card Grid | User Input | **Technical**: (Infer from "Computer Science": HTML/CSS, Figma, UI Design, etc.)<br>**Soft Skills**: Time Management, Communication.<br>**Interests**: Piano, Badminton, Taekwondo. | - |
| **Education** | Timeline | User Input | **Degree**: Bachelor of Science in Computer Science<br>**School**: Rajamangala University of Technology Thanyaburi<br>**Year**: Expected 2027 | `imgs/university_logo.png` (Optional) |
| **Experience** | Timeline | User Input | *Note: No specific work history provided. Use "Education" as main timeline or include "University Projects" section.* | - |
| **Portfolio** | Project Grid | User Input | *Note: No specific projects provided. Create 3 placeholder projects:*<br>1. "E-commerce Redesign"<br>2. "Mobile Banking App"<br>3. "University Portal" | `imgs/project_thumb_1.jpg`<br>`imgs/project_thumb_2.jpg`<br>`imgs/project_thumb_3.jpg` |
| **Contact** | Contact Block | User Input | Email: anuthidawanseng@gmail.com<br>Phone: 0624855622<br>Location: Khlong Luang, Pathum Thani | - |

## 4. Content Analysis

**Information Density:** Low
- Focus on clean typography and generous whitespace.
- Key goal: Readability and personality.

**Content Balance:**
- Text: ~300 words (Resume highlights)
- Images: 4-5 key images (Profile + Projects)
- Visuals: Minimalist icons for contact/skills.
