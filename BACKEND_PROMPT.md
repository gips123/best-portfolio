# Backend Golang API - Portfolio Website

## Project Overview
Buatkan RESTful API backend menggunakan Golang untuk mendukung portfolio website frontend yang dibangun dengan Next.js 16, React 19, TypeScript, dan Tailwind CSS. Backend ini akan menyediakan data dan fungsionalitas untuk mengelola konten portfolio secara dinamis.

## Tech Stack Requirements
- **Language**: Golang (Go 1.21+)
- **Framework**: Gin atau Echo (pilih yang lebih sesuai)
- **Database**: PostgreSQL (untuk data persistent)
- **ORM**: GORM atau database/sql dengan driver pq
- **Validation**: validator package
- **CORS**: Middleware untuk CORS support
- **Environment**: Viper atau godotenv untuk config management
- **Logging**: Logrus atau Zap
- **File Structure**: Clean Architecture / Layered Architecture

## Database Schema

### 1. About Cards Table
```sql
CREATE TABLE about_cards (
    id SERIAL PRIMARY KEY,
    card_id VARCHAR(50) UNIQUE NOT NULL, -- 'about-me', 'aspirations', etc
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE about_paragraphs (
    id SERIAL PRIMARY KEY,
    about_card_id INTEGER REFERENCES about_cards(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    paragraph_type VARCHAR(20) NOT NULL, -- 'highlight' or 'normal'
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE about_hobbies (
    id SERIAL PRIMARY KEY,
    about_card_id INTEGER REFERENCES about_cards(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE about_quotes (
    id SERIAL PRIMARY KEY,
    about_card_id INTEGER REFERENCES about_cards(id) ON DELETE CASCADE,
    quote TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Projects Table
```sql
CREATE TABLE project_categories (
    id SERIAL PRIMARY KEY,
    category_id VARCHAR(50) UNIQUE NOT NULL, -- 'all', 'frontend', 'backend', etc
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_number VARCHAR(10) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_title VARCHAR(255),
    image_description TEXT,
    image_url VARCHAR(500),
    button_text VARCHAR(100),
    detail_url VARCHAR(500),
    category_id INTEGER REFERENCES project_categories(id),
    display_order INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_tech_stack (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    tech_name VARCHAR(100) NOT NULL,
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Skills Table
```sql
CREATE TABLE skill_categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES skill_categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    percentage INTEGER NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Contact Table
```sql
CREATE TABLE contact_info (
    id SERIAL PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    value VARCHAR(255) NOT NULL,
    link VARCHAR(500),
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE social_links (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    url VARCHAR(500) NOT NULL,
    display_order INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Page Metadata Table
```sql
CREATE TABLE page_metadata (
    id SERIAL PRIMARY KEY,
    page_name VARCHAR(50) UNIQUE NOT NULL, -- 'contact', 'skills', 'projects'
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints Specification

### About Endpoints
```
GET    /api/v1/about/cards              - Get all about cards with content
GET    /api/v1/about/cards/:cardId      - Get specific about card
GET    /api/v1/about/sidebar            - Get sidebar navigation buttons
PUT    /api/v1/about/cards/:cardId      - Update about card
POST   /api/v1/about/cards/:cardId/paragraphs - Add paragraph to card
PUT    /api/v1/about/cards/:cardId/paragraphs/:id - Update paragraph
DELETE /api/v1/about/cards/:cardId/paragraphs/:id - Delete paragraph
POST   /api/v1/about/cards/:cardId/hobbies - Add hobby
PUT    /api/v1/about/cards/:cardId/hobbies/:id - Update hobby
DELETE /api/v1/about/cards/:cardId/hobbies/:id - Delete hobby
PUT    /api/v1/about/cards/:cardId/quote - Update quote
```

### Projects Endpoints
```
GET    /api/v1/projects                 - Get all projects (with optional ?category=frontend filter)
GET    /api/v1/projects/:id             - Get project by ID
GET    /api/v1/projects/categories      - Get all project categories
POST   /api/v1/projects                 - Create new project
PUT    /api/v1/projects/:id             - Update project
DELETE /api/v1/projects/:id             - Delete project
POST   /api/v1/projects/:id/tech-stack  - Add tech to project
DELETE /api/v1/projects/:id/tech-stack/:techId - Remove tech from project
GET    /api/v1/projects/metadata       - Get projects page title and subtitle
```

### Skills Endpoints
```
GET    /api/v1/skills                   - Get all skill categories with skills
GET    /api/v1/skills/categories        - Get all skill categories
GET    /api/v1/skills/categories/:id    - Get specific category with skills
POST   /api/v1/skills/categories        - Create skill category
PUT    /api/v1/skills/categories/:id    - Update skill category
DELETE /api/v1/skills/categories/:id    - Delete skill category
POST   /api/v1/skills/categories/:id/skills - Add skill to category
PUT    /api/v1/skills/:id               - Update skill
DELETE /api/v1/skills/:id               - Delete skill
GET    /api/v1/skills/metadata          - Get skills page title and subtitle
```

### Contact Endpoints
```
GET    /api/v1/contact/info             - Get contact information
PUT    /api/v1/contact/info/:id         - Update contact info
POST   /api/v1/contact/info             - Add contact info
DELETE /api/v1/contact/info/:id         - Delete contact info
GET    /api/v1/contact/social           - Get social media links
POST   /api/v1/contact/social           - Add social link
PUT    /api/v1/contact/social/:id       - Update social link
DELETE /api/v1/contact/social/:id       - Delete social link
POST   /api/v1/contact/submit           - Submit contact form
GET    /api/v1/contact/submissions      - Get all submissions (admin)
GET    /api/v1/contact/metadata         - Get contact page title and description
```

## Request/Response Models

### About Card Response
```json
{
  "id": 1,
  "card_id": "about-me",
  "title": "ABOUT ME",
  "paragraphs": [
    {
      "id": 1,
      "content": "Hello! I'm <span className=\"font-semibold text-white\">Ghifary Ahmad Alfirdausy</span>...",
      "type": "highlight",
      "display_order": 1
    }
  ],
  "hobbies": [
    {
      "id": 1,
      "title": "Coding & Learning",
      "description": "Exploring new technologies...",
      "display_order": 1
    }
  ],
  "quote": "Never stop learning...",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### Project Response
```json
{
  "id": 1,
  "project_number": "04",
  "title": "Gasstrip - Holiday Ticket Booking Website",
  "description": "A comprehensive holiday ticket booking platform...",
  "tech_stack": ["Next.js", "Strapi", "PostgreSQL"],
  "image_title": "Pesona Yang Memikat Untuk Perjalanan Anda",
  "image_description": "Temukan keindahan tersembunyi...",
  "image_url": "/assets/gips2.png",
  "button_text": "Paket Wisata",
  "detail_url": "#",
  "category": {
    "id": 4,
    "category_id": "fullstack",
    "name": "Fullstack"
  },
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### Skill Category Response
```json
{
  "id": 1,
  "title": "Frontend Development",
  "description": "Creating beautiful, responsive...",
  "skills": [
    {
      "id": 1,
      "name": "React/Next.js",
      "percentage": 90,
      "display_order": 1
    }
  ],
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### Contact Form Request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to discuss a project..."
}
```

## Features Requirements

1. **CRUD Operations**: Full Create, Read, Update, Delete untuk semua entities
2. **Filtering**: Projects dapat di-filter berdasarkan category
3. **Pagination**: Untuk projects dan submissions (optional, bisa ditambahkan jika perlu)
4. **Validation**: 
   - Email validation untuk contact form
   - Required field validation
   - Percentage validation (0-100) untuk skills
5. **Error Handling**: 
   - Standardized error response format
   - Proper HTTP status codes
   - Error logging
6. **CORS**: Enable CORS untuk frontend Next.js
7. **Environment Configuration**: 
   - Database connection string
   - Server port
   - CORS origins
8. **Database Migrations**: Setup migration system (gunakan golang-migrate atau similar)
9. **Seed Data**: Script untuk populate initial data dari dummy data yang ada

## Response Format Standard

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": { ... }
  }
}
```

## Project Structure Suggestion
```
backend/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── config/
│   ├── database/
│   ├── models/
│   ├── handlers/
│   ├── services/
│   ├── repositories/
│   └── middleware/
├── pkg/
│   ├── response/
│   ├── validator/
│   └── logger/
├── migrations/
├── seeds/
├── .env.example
├── go.mod
├── go.sum
└── README.md
```

## Additional Requirements

1. **Documentation**: 
   - API documentation menggunakan Swagger/OpenAPI
   - README dengan setup instructions
   - Environment variables documentation

2. **Testing**:
   - Unit tests untuk services dan repositories
   - Integration tests untuk API endpoints

3. **Security**:
   - Input sanitization
   - SQL injection prevention (gunakan parameterized queries)
   - Rate limiting untuk contact form submissions

4. **Performance**:
   - Database indexing pada foreign keys dan frequently queried fields
   - Connection pooling
   - Optional: Caching untuk frequently accessed data

5. **Logging**:
   - Structured logging
   - Request/response logging (optional, untuk debugging)

## Data Seeding

Buat script untuk seed initial data berdasarkan dummy data yang ada di frontend:
- About cards dengan semua content
- Project categories
- Sample projects (minimal 7 projects sesuai dummy data)
- Skill categories dengan skills
- Contact info
- Social links
- Page metadata

## Notes

- Backend harus RESTful dan mengikuti best practices
- Gunakan proper HTTP methods (GET, POST, PUT, DELETE)
- Implement proper error handling dan validation
- Database schema harus support untuk future enhancements
- API responses harus match dengan format yang diharapkan frontend
- **Icon handling**: Semua icon (untuk about cards, skills, contact info, social links) sudah ditetapkan di frontend menggunakan Lucide React icons. Backend tidak perlu menyimpan atau mengirim data icon. Frontend akan melakukan mapping berdasarkan `card_id`, `name`, atau identifier lainnya.
- Consider adding authentication/authorization jika diperlukan untuk admin endpoints di masa depan

