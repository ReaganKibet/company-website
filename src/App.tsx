import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import ErrorBoundary from './components/layouts/state/ErrorBoundary';
import { NavigationLoadingProvider } from './components/layouts/state/NavigationLoadingProvider';
import ErrorFallback from './components/layouts/state/ErrorFallback';
import LoadingFallback from './components/layouts/state/LoadingFallback';
import { AuthProvider, ProtectedRoute, ProtectedComponent } from './auth';
import RoleProtectedComponent from './auth/RoleProtectedComponent';
import { NotificationProvider } from './context/NotificationContext';

// Lazy load pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const RegisterSuccess = lazy(() => import('./pages/auth/RegisterSuccess'));
const EmailVerified = lazy(() => import('./pages/auth/EmailVerified'));
const EmailVerificationFailed = lazy(() => import('./pages/auth/EmailVerificationFailed'));
const VerifyEmail = lazy(() => import('./pages/auth/VerifyEmail'));
const AuthCallback = lazy(() => import('./auth/AuthCallback'));
const NotFoundPage = lazy(() => import('./pages/fallback/NotFoundPage'));
const UnauthorizedPage = lazy(() => import('./pages/fallback/UnauthorizedPage'));

// Main pages
const HomePage = lazy(() => import('./pages/main/HomePage'));
const ServicesPage = lazy(() => import('./pages/main/services/Services'));
const SolutionsPage = lazy(() => import('./pages/main/solutions/Solutions'));
const BlogPage = lazy(() => import('./pages/main/blog/Blog'));
const BookCallPage = lazy(() => import('./pages/main/book-call/BookCall'));
const CaseStudiesPage = lazy(() => import('./pages/main/case-studies/CaseStudies'));
const AboutPage = lazy(() => import('./pages/main/About'));
const ToolsPage = lazy(() => import('./pages/main/tools/Tools'));
const PrivacyPolicyPage = lazy(() => import('./pages/policy/PrivacyPolicy'));
const TermsAndConditionsPage = lazy(() => import('./pages/policy/TermsAndConditions'));

// LazyComponentWrapper for code splitting
const LazyComponentWrapper = ({ component: Component }: { component: React.ComponentType }) => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <NavigationLoadingProvider>
          <Routes>
          <Route element={<ProtectedRoute requireAuth={false} redirectPath="/profile" />}>
            <Route path='/login' element={<LazyComponentWrapper component={Login} />}/>
            <Route path='/register' element={<LazyComponentWrapper component={Register} />}/>
            <Route path='/register-success' element={<LazyComponentWrapper component={RegisterSuccess} />}/>
            <Route path='/email-verified' element={<LazyComponentWrapper component={EmailVerified} />}/>
            <Route path='/email-verification-failed' element={<LazyComponentWrapper component={EmailVerificationFailed} />}/>
            <Route path='/verify-email/:token' element={<LazyComponentWrapper component={VerifyEmail} />}/>
            <Route path='/auth/callback' element={<LazyComponentWrapper component={AuthCallback} />}/>
          </Route>

          
          <Route path="/" element={<RootLayout />}>
            <Route index element={<LazyComponentWrapper component={HomePage} />} />
            <Route path="home" element={<LazyComponentWrapper component={HomePage} />} />
            <Route path="services" element={<LazyComponentWrapper component={ServicesPage} />} />
            <Route path="solutions" element={<LazyComponentWrapper component={SolutionsPage} />} />
            <Route path="blog" element={<LazyComponentWrapper component={BlogPage} />} />
            <Route path="book-call" element={<LazyComponentWrapper component={BookCallPage} />} />
            <Route path="about" element={<LazyComponentWrapper component={AboutPage} />} />
            <Route path="case-studies" element={<LazyComponentWrapper component={CaseStudiesPage} />} />
            <Route path="tools" element={<LazyComponentWrapper component={ToolsPage} />} />

          </Route>
          <Route path="policy" element={<LazyComponentWrapper component={PrivacyPolicyPage} />} />
          <Route path="terms-and-conditions" element={<LazyComponentWrapper component={TermsAndConditionsPage} />} />          
          <Route path="*" element={<LazyComponentWrapper component={NotFoundPage} />} />
        </Routes>
        </NavigationLoadingProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;