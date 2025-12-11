import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>סה״כ הקלקות</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            124,580
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +8.4%
            </Badge>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            עלייה שבועית בהפניות <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            כל ההפניות מהשבוע האחרון
          </div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>המרות לדפדפן</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            76.2%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +3.1%
            </Badge>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            רוב הלחיצות יצאו לדפדפן הנייטיב <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            23.8% נשארו בתוך In-App
          </div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>קישורים</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            328
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12 קישורים חדשים
            </Badge>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            קצב יצירה יומי ממשיך לעלות <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">כולל קישורי QR וקמפיינים</div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>זיהוי In-App</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            94.1%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +1.2%
            </Badge>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            זיהוי מוצלח של מקורות IG/FB/TikTok <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">מדד רגישות אחרון</div>
        </CardFooter> */}
      </Card>
    </div>
  )
}
