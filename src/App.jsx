import { Menu } from "./components/Menu";
import { HomePage } from "./pages/HomePage";
import { EventListPage } from "./pages/EventListPage"
import { EventDetailPage } from './pages/EventDetailPage'
import { TicketPaymentPage } from "./pages/TicketPaymentPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/events/:eventId/tickets/:priceId" element={<TicketPaymentPage />} />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
