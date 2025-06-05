# Smart Trash Management System Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Components Documentation](#components-documentation)
- [Pages Documentation](#pages-documentation)
- [API Documentation](#api-documentation)
- [State Management](#state-management)
- [Styling & Theming](#styling--theming)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Overview

The Smart Trash Management System is a modern React-based web application designed to streamline waste management operations. This application provides intelligent tracking, monitoring, and management capabilities for waste collection and disposal processes.

### Purpose
- **Efficient Waste Tracking**: Monitor waste collection schedules and routes
- **Smart Analytics**: Provide insights into waste generation patterns
- **User-Friendly Interface**: Intuitive design for both administrators and end-users
- **Real-time Updates**: Live tracking of waste collection status

---

## ✨ Features

### Core Features
- 🗑️ **Smart Waste Bin Monitoring**
- 📊 **Analytics Dashboard**
- 🗓️ **Schedule Management**
- 🚛 **Route Optimization**
- 📱 **Mobile Responsive Design**
- 🔔 **Real-time Notifications**
- 👥 **User Management System**
- 📈 **Reporting & Analytics**

### Advanced Features
- 🤖 **AI-Powered Predictions**
- 🔍 **Search & Filter Capabilities**
- 📧 **Email Notifications**
- 🌍 **Multi-language Support**
- 🔒 **Security & Authentication**

---

## 🛠️ Technology Stack

### Frontend
- **React** (18.x) - UI Library
- **React Router** - Navigation
- **React Hooks** - State Management
- **CSS3/SCSS** - Styling
- **Material-UI/Bootstrap** - UI Components

### Development Tools
- **Create React App** - Project Setup
- **ESLint** - Code Linting
- **Prettier** - Code Formatting
- **Jest** - Testing Framework
- **React Testing Library** - Component Testing

### Build & Deployment
- **Webpack** - Module Bundling
- **Babel** - JavaScript Compilation
- **npm/yarn** - Package Management

---

## 🚀 Installation & Setup

### Prerequisites
```bash
Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher) or yarn
Git
```

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/Syntax-Error-1337/smart-trash.git
cd smart-trash
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
```bash
# Create .env file in root directory
cp .env.example .env

# Edit .env with your configuration
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_VERSION=1.0.0
```

4. **Start Development Server**
```bash
npm start
# or
yarn start
```

5. **Open Application**
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
smart-trash/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   └── Loading/
│   │   ├── Dashboard/
│   │   ├── TrashBins/
│   │   ├── Routes/
│   │   ├── Analytics/
│   │   └── Users/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   ├── TrashManagement/
│   │   ├── Reports/
│   │   └── Settings/
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useApi.js
│   │   └── useLocalStorage.js
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── utils.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── components/
│   │   └── pages/
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── validators.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

---

## 🧩 Components Documentation

### Core Components

#### Header Component
**Location**: `src/components/common/Header/Header.js`

**Purpose**: Navigation header with user authentication and menu items.

**Props**:
```javascript
interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  currentPage: string;
}
```

**Features**:
- User authentication status
- Navigation menu
- Responsive design
- Logout functionality

**Usage**:
```jsx
import Header from './components/common/Header/Header';

<Header 
  user={currentUser} 
  onLogout={handleLogout}
  currentPage="dashboard"
/>
```

#### Dashboard Component
**Location**: `src/components/Dashboard/Dashboard.js`

**Purpose**: Main dashboard displaying key metrics and overview.

**Features**:
- Real-time statistics
- Interactive charts
- Quick action buttons
- Status indicators

**State Management**:
```javascript
const [dashboardData, setDashboardData] = useState({
  totalBins: 0,
  filledBins: 0,
  collectionRoutes: 0,
  todayCollections: 0
});
```

#### TrashBin Component
**Location**: `src/components/TrashBins/TrashBin.js`

**Purpose**: Individual trash bin display and management.

**Props**:
```javascript
interface TrashBinProps {
  binId: string;
  location: string;
  fillLevel: number;
  lastCollection: Date;
  status: 'active' | 'maintenance' | 'offline';
  onAction: (action: string, binId: string) => void;
}
```

### Form Components

#### TrashBinForm
**Purpose**: Add/Edit trash bin information

**Validation Rules**:
- Location: Required, min 3 characters
- Capacity: Required, numeric, > 0
- Type: Required, select from predefined options

#### UserForm
**Purpose**: User management and profile editing

**Features**:
- Form validation
- Role assignment
- Password strength checking
- Profile image upload

---

## 📄 Pages Documentation

### Home Page
**Route**: `/`
**Component**: `src/pages/Home/Home.js`

**Purpose**: Landing page with application overview and login access.

**Sections**:
- Hero section with key features
- Statistics overview
- Call-to-action buttons
- Footer with contact information

### Dashboard Page
**Route**: `/dashboard`
**Component**: `src/pages/Dashboard/Dashboard.js`

**Purpose**: Main application dashboard for authenticated users.

**Features**:
- Real-time metrics
- Interactive charts
- Recent activities
- Quick actions panel

**Data Flow**:
```javascript
useEffect(() => {
  fetchDashboardData()
    .then(data => setDashboardState(data))
    .catch(error => handleError(error));
}, []);
```

### Trash Management Page
**Route**: `/trash-management`
**Component**: `src/pages/TrashManagement/TrashManagement.js`

**Purpose**: Comprehensive trash bin management interface.

**Sections**:
- Bin listing with filters
- Map view of bin locations
- Bin status monitoring
- Collection scheduling

**Key Functions**:
```javascript
const handleBinUpdate = async (binId, updates) => {
  try {
    await updateTrashBin(binId, updates);
    refreshBinList();
    showSuccessMessage('Bin updated successfully');
  } catch (error) {
    showErrorMessage('Failed to update bin');
  }
};
```

### Reports Page
**Route**: `/reports`
**Component**: `src/pages/Reports/Reports.js`

**Purpose**: Analytics and reporting interface.

**Report Types**:
- Collection efficiency reports
- Waste generation trends
- Route optimization analysis
- Cost analysis reports

### Settings Page
**Route**: `/settings`
**Component**: `src/pages/Settings/Settings.js`

**Purpose**: Application configuration and user preferences.

**Settings Categories**:
- User profile settings
- Notification preferences
- System configurations
- Data export options

---

## 🔌 API Documentation

### Base Configuration
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
```

### Authentication Endpoints

#### Login
```javascript
POST /auth/login
{
  "email": "user@example.com",
  "password": "password"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "role": "admin"
  }
}
```

#### Register
```javascript
POST /auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password",
  "role": "user"
}
```

### Trash Bin Endpoints

#### Get All Bins
```javascript
GET /bins
Query Parameters:
- page: number (default: 1)
- limit: number (default: 20)
- status: string (active|maintenance|offline)
- location: string

Response:
{
  "bins": [
    {
      "id": "bin_id",
      "location": "Main Street 123",
      "fillLevel": 75,
      "capacity": 100,
      "status": "active",
      "lastCollection": "2024-01-15T10:30:00Z"
    }
  ],
  "totalCount": 150,
  "currentPage": 1
}
```

#### Create Bin
```javascript
POST /bins
{
  "location": "New Location",
  "capacity": 100,
  "type": "recyclable",
  "coordinates": {
    "lat": 40.7128,
    "lng": -74.0060
  }
}
```

#### Update Bin
```javascript
PUT /bins/:id
{
  "fillLevel": 80,
  "status": "maintenance"
}
```

### Collection Routes Endpoints

#### Get Routes
```javascript
GET /routes
Response:
{
  "routes": [
    {
      "id": "route_id",
      "name": "Route A",
      "bins": ["bin_id_1", "bin_id_2"],
      "estimatedTime": 120,
      "status": "active"
    }
  ]
}
```

---

## 🔄 State Management

### Context Providers

#### AuthContext
```javascript
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    setUser(response.user);
    localStorage.setItem('token', response.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

#### AppContext
```javascript
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [theme, setTheme] = useState('light');
  
  const addNotification = (notification) => {
    setNotifications(prev => [...prev, notification]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <AppContext.Provider value={{
      notifications,
      addNotification,
      removeNotification,
      theme,
      setTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};
```

### Custom Hooks

#### useAuth Hook
```javascript
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

#### useApi Hook
```javascript
export const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(url, options);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};
```

---

## 🎨 Styling & Theming

### CSS Architecture
The application uses a modular CSS approach with the following structure:

```
src/styles/
├── globals.css          # Global styles and CSS reset
├── variables.css        # CSS custom properties
├── components/
│   ├── Header.module.css
│   ├── Dashboard.module.css
│   └── TrashBin.module.css
└── pages/
    ├── Home.module.css
    └── Dashboard.module.css
```

### CSS Variables
```css
:root {
  /* Colors */
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --success-color: #16a34a;
  --warning-color: #ca8a04;
  --error-color: #dc2626;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
}
```

### Responsive Design
```css
/* Mobile First Approach */
.container {
  padding: var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    padding: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-xl);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### Component Styling Example
```css
/* TrashBin.module.css */
.trashBin {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: var(--spacing-md);
  transition: transform 0.2s ease;
}

.trashBin:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.fillLevel {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.fillBar {
  height: 100%;
  background: var(--success-color);
  transition: width 0.3s ease;
}

.fillBar.warning {
  background: var(--warning-color);
}

.fillBar.critical {
  background: var(--error-color);
}
```

---

## 🧪 Testing

### Testing Setup
The application uses Jest and React Testing Library for comprehensive testing.

```json
{
  "scripts": {
    "test": "react-scripts test",
    "test:coverage": "react-scripts test --coverage --watchAll=false",
    "test:ci": "CI=true react-scripts test --coverage --watchAll=false"
  }
}
```

### Component Testing Example
```javascript
// TrashBin.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TrashBin from './TrashBin';

describe('TrashBin Component', () => {
  const mockProps = {
    binId: 'bin-1',
    location: 'Main Street 123',
    fillLevel: 75,
    lastCollection: new Date('2024-01-15'),
    status: 'active',
    onAction: jest.fn()
  };

  test('renders trash bin information correctly', () => {
    render(<TrashBin {...mockProps} />);
    
    expect(screen.getByText('Main Street 123')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  test('calls onAction when action button is clicked', () => {
    render(<TrashBin {...mockProps} />);
    
    const actionButton = screen.getByRole('button', { name: /schedule collection/i });
    fireEvent.click(actionButton);
    
    expect(mockProps.onAction).toHaveBeenCalledWith('schedule', 'bin-1');
  });

  test('displays warning color for high fill level', () => {
    const highFillProps = { ...mockProps, fillLevel: 85 };
    render(<TrashBin {...highFillProps} />);
    
    const fillBar = screen.getByTestId('fill-bar');
    expect(fillBar).toHaveClass('warning');
  });
});
```

### Integration Testing
```javascript
// Dashboard.integration.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import * as api from '../services/api';

jest.mock('../services/api');

describe('Dashboard Integration', () => {
  beforeEach(() => {
    api.fetchDashboardData.mockResolvedValue({
      totalBins: 150,
      filledBins: 45,
      collectionRoutes: 12,
      todayCollections: 8
    });
  });

  test('loads and displays dashboard data', async () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('150')).toBeInTheDocument();
      expect(screen.getByText('Total Bins')).toBeInTheDocument();
    });
  });
});
```

### Test Coverage Goals
- **Unit Tests**: 85%+ coverage
- **Integration Tests**: Critical user flows
- **E2E Tests**: Main application scenarios

---

## 🚀 Deployment

### Build Process
```bash
# Production build
npm run build

# The build folder contains optimized files ready for deployment
ls build/
# static/  index.html  manifest.json  favicon.ico
```

### Environment Variables
```bash
# Production Environment
REACT_APP_API_URL=https://api.smarttrash.com
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=production
```

### Deployment Options

#### Netlify Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=build
```

#### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:16-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🤝 Contributing

### Development Workflow

1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature-name
   ```

3. **Make Changes**
   - Follow coding standards
   - Add tests for new features
   - Update documentation

4. **Commit Changes**
   ```bash
   git commit -m "feat: add new feature description"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/new-feature-name
   ```

### Coding Standards

#### JavaScript/React Standards
- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable names
- Add JSDoc comments for complex functions

```javascript
/**
 * Calculates the optimal collection route for given bins
 * @param {Array<TrashBin>} bins - Array of trash bins
 * @param {Object} options - Route calculation options
 * @returns {Promise<Route>} Optimized collection route
 */
const calculateOptimalRoute = async (bins, options = {}) => {
  // Implementation
};
```

#### CSS Standards
- Use CSS modules for component styles
- Follow BEM methodology for class names
- Use CSS custom properties for consistent theming
- Mobile-first responsive design

### Commit Message Convention
```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Application Won't Start
**Symptoms**: Error when running `npm start`

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 14.0.0 or higher
```

#### 2. Build Failures
**Symptoms**: `npm run build` fails

**Solutions**:
```bash
# Check for TypeScript errors
npm run type-check

# Resolve dependency conflicts
npm audit fix

# Check environment variables
cat .env
```

#### 3. API Connection Issues
**Symptoms**: Data not loading, network errors

**Solutions**:
```javascript
// Check API configuration
console.log('API URL:', process.env.REACT_APP_API_URL);

// Verify CORS settings
// Add to API server:
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-domain.com']
}));
```

#### 4. Authentication Problems
**Symptoms**: Login not working, token issues

**Solutions**:
```javascript
// Clear stored tokens
localStorage.removeItem('token');
sessionStorage.clear();

// Check token expiration
const token = localStorage.getItem('token');
if (token) {
  const payload = JSON.parse(atob(token.split('.')[1]));
  console.log('Token expires:', new Date(payload.exp * 1000));
}
```

### Performance Issues

#### Large Bundle Size
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

#### Memory Leaks
```javascript
// Check for memory leaks in useEffect
useEffect(() => {
  const interval = setInterval(() => {
    // Some operation
  }, 1000);

  // Always cleanup
  return () => clearInterval(interval);
}, []);
```

### Browser Compatibility
- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

---

## 📞 Support & Resources

### Documentation Links
- [React Documentation](https://reactjs.org/docs)
- [Create React App Documentation](https://create-react-app.dev/docs)
- [Jest Testing Framework](https://jestjs.io/docs)

### Community Resources
- [GitHub Issues](https://github.com/Syntax-Error-1337/smart-trash/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

### Contact Information
- **Project Maintainer**: Syntax-Error-1337
- **Repository**: [smart-trash](https://github.com/Syntax-Error-1337/smart-trash)
- **Issues**: [GitHub Issues](https://github.com/Syntax-Error-1337/smart-trash/issues)

---

## 📝 License & Acknowledgments

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgments
- React team for the excellent framework
- Create React App for the boilerplate
- All contributors and community members

---

**Last Updated**: June 2025
**Version**: 1.0.0
**Documentation Status**: ✅ Complete

---

> 💡 **Note**: This documentation is a living document. Please keep it updated as the project evolves and new features are added.
