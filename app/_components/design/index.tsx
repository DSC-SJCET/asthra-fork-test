import { Card } from "~/components/ui/card"
import { CardsActivityGoal } from "./activity-goal"
import { CardsCalendar } from "./calendar"
import { CardsChat } from "./chat"
import { CardsCookieSettings } from "./cookie-settings"
import { CardsCreateAccount } from "./create-account"
import { CardsDataTable } from "./data-table"
import { CardsMetric } from "./metric"
import { NavigationMenuDemo } from "./nav-demo"
import { CardsPaymentMethod } from "./payment-method"
import { CardsReportIssue } from "./report-issue"
import { CardsShare } from "./share"
import { CardsStats } from "./stats"
import { CardsTeamMembers } from "./team-members"
import { Island } from "~/components/madeup/dynamic-island"
import { AnimateBorder } from "~/components/madeup/anime-border"
import { BorderBeam } from "~/components/madeup/border-beam"

export default function CardsDemo() {
  return (
    <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <CardsStats />
        <div className="grid gap-1 sm:grid-cols-[280px_1fr] md:hidden">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            <CardsMetric />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="space-y-4 xl:space-y-4">
            <CardsTeamMembers />
            <CardsCookieSettings />
            <CardsPaymentMethod />
          </div>
          <div className="space-y-4 xl:space-y-4">
            <CardsChat />
            <CardsCreateAccount />
            <div className="hidden xl:block">
              <CardsReportIssue />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
        <div className="hidden gap-1 sm:grid-cols-[280px_1fr] md:grid">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <CardsMetric />
		  </div>
		  <div className="pt-3 sm:col-span-2 xl:pt-3">
			<BorderBeam className="p-3">
				<h1>Lorem ipsum dolor sit amet</h1>
			</BorderBeam>
		  </div>
        </div>
        <div className="hidden md:block">
          <CardsDataTable />
        </div>
        <AnimateBorder>

        <CardsShare />
        </AnimateBorder>
        <Island shadow>
          <NavigationMenuDemo />
        </Island>
        <div className="">
          <CardsReportIssue />
        </div>
      </div>
    </div>
  )
}
