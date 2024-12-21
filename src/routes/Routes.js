import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../layouts/login-page/LoginPage";
import MainPage from "../layouts/main-page/MainPage";
import Dashboard from "../layouts/dashboard-page/Dashboard";
import SignalStrength from "../layouts/maps-page/SignalStrength/SignalStrength";
import VehicleDensity from "../layouts/maps-page/VehicleDensity/VehicleDensity";
import Support from "../layouts/support-page/Support";
import ViewComplaints from "../layout-components/support-components/ViewComplaints/ViewComplaints";
import BikeListView from "../layout-components/BikeList-components/BikeListView/BikeListView";
import BikesList from "../layouts/BikesList-page/BikesList";
import Sos from "../layouts/sos-page/Sos";
import SosView from "../layout-components/Sos-components/SosView/SosView";
import DashboardServiceDueList from "../layout-components/dashboard-components/DashboardServiceDueList/DashboardServiceDueList";
import UserInsights from "../layouts/Insights/UserInsights/UserInsights";
import OperationalInsights from "../layouts/Insights/OperationalInsights/OperationalInsights"    ;
import Overview from "../layouts/Insights/Overview/Overview";
import Predictions from "../layouts/Insights/Predictions/Predictions"
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
      children: [
        {
          path: "/main-page/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/main-page/dashboard/DashboardServiceDueList",
          element: <DashboardServiceDueList />,
        },
        {
          path: "/main-page/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/main-page/dashboard/DashboardServiceDueList",
          element: <DashboardServiceDueList />,
        },
        {
          path: "/main-page/Maps/VehicleDensity",
          element: <VehicleDensity />,
        },
        {
          path: "/main-page/Maps/SignalStrength",
          element: <SignalStrength />,
        },
        {
          path: "/main-page/Sos",
          element: <Sos />,
        },
        {
          path: "/main-page/Sos/SosView/:id",
          element: <SosView />,
        },
        {
          path: "/main-page/Support",
          element: <Support />,
        },
        {
          path: "/main-page/Support/ViewComplaints/:username",
          element: <ViewComplaints />,
        },

        {
          path: "/main-page/BikesList",
          element: <BikesList />,
        },
        {
          path: "/main-page/BikesList/BikeListView",
          element: <BikeListView />,
        },
        // {
        //   path: "/main-page/StaticAnalysis",
        //   element: <StaticAnalysis />,
        // },
        {
          path: "/main-page/Insights/Overview",
          element: <Overview />,
        },
        {
          path: "/main-page/Insights/UserInsights",
          element: <UserInsights />,
        },
        {
          path: "/main-page/Insights/OperationalInsights",
          element: <OperationalInsights />,
        },
        {
          path: "/main-page/Insights/Predictions",
          element: <Predictions />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
