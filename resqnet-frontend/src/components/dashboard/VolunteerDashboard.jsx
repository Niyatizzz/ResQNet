import { Users, UserCheck, MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContainer, Flex, Grid } from "@/components/ui/containers";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Sample data for open requests
const openRequests = [
  {
    id: 1,
    type: "Food",
    distance: "0.8 miles",
    location: "1234 Park Ave",
    requestedAt: "10 minutes ago",
    requestedBy: "Anonymous",
    urgency: "high",
  },
  {
    id: 2,
    type: "Medical Aid",
    distance: "1.2 miles",
    location: "5678 Main St",
    requestedAt: "15 minutes ago",
    requestedBy: "Anonymous",
    urgency: "medium",
  },
  {
    id: 3,
    type: "Shelter",
    distance: "2.5 miles",
    location: "910 Oak Dr",
    requestedAt: "30 minutes ago",
    requestedBy: "Anonymous",
    urgency: "low",
  },
];

// Sample data for accepted requests
const acceptedRequests = [
  {
    id: 4,
    type: "Medical Aid",
    location: "321 Pine Rd",
    requestedAt: "1 hour ago",
    requestedBy: "Jane Doe",
    status: "in-progress",
  },
];

const VolunteerDashboard = () => {
  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "high":
        return (
          <Badge
            variant="outline"
            className="bg-urgent/10 text-urgent border-urgent/20"
          >
            High Urgency
          </Badge>
        );
      case "medium":
        return (
          <Badge
            variant="outline"
            className="bg-warning/10 text-warning border-warning/20"
          >
            Medium Urgency
          </Badge>
        );
      case "low":
        return (
          <Badge
            variant="outline"
            className="bg-info/10 text-info border-info/20"
          >
            Low Urgency
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <CardContainer className="bg-gradient-to-r from-primary/5 to-accent/5 border-none">
        <Flex justify="between" align="center">
          <div>
            <Flex align="center" gap="sm">
              <h2 className="text-2xl font-medium">Volunteer Dashboard</h2>
              <Badge className="ml-2">Active</Badge>
            </Flex>
            <p className="text-muted-foreground">
              You're currently visible to people who need assistance
            </p>
          </div>
          <Flex align="center" gap="sm">
            <Label htmlFor="availability-mode" className="text-sm">
              Availability
            </Label>
            <Switch id="availability-mode" defaultChecked />
          </Flex>
        </Flex>
      </CardContainer>

      <Grid cols={1} className="lg:grid-cols-3 gap-6">
        <CardContainer className="lg:col-span-2">
          <Tabs defaultValue="open">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="open">Open Requests</TabsTrigger>
              <TabsTrigger value="accepted">
                Accepted
                {acceptedRequests.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {acceptedRequests.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="open" className="mt-4 animate-fade-in">
              <div className="space-y-4">
                {openRequests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-lg border p-4 transition-all hover:bg-muted/50"
                  >
                    <Flex justify="between" align="start" className="mb-3">
                      <div>
                        <h4 className="text-base font-medium">
                          {request.type} Request
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Requested {request.requestedAt}
                        </p>
                      </div>
                      {getUrgencyBadge(request.urgency)}
                    </Flex>

                    <div className="mb-4">
                      <Flex
                        align="center"
                        className="text-sm text-muted-foreground mb-1"
                      >
                        <MapPin className="h-3.5 w-3.5 mr-1.5" />
                        {request.location} ({request.distance})
                      </Flex>
                    </div>

                    <Flex justify="end" gap="sm">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Accept Request</Button>
                    </Flex>
                  </div>
                ))}

                {openRequests.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No open requests in your area right now.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="accepted" className="mt-4 animate-fade-in">
              <div className="space-y-4">
                {acceptedRequests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-lg border p-4 transition-all hover:bg-muted/50"
                  >
                    <Flex justify="between" align="start" className="mb-3">
                      <div>
                        <h4 className="text-base font-medium">
                          {request.type} Request
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Accepted {request.requestedAt}
                        </p>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        In Progress
                      </Badge>
                    </Flex>

                    <div className="mb-4">
                      <Flex align="center" className="text-sm mb-1">
                        <MapPin className="h-3.5 w-3.5 mr-1.5" />
                        {request.location}
                      </Flex>

                      <Flex align="center" className="text-sm">
                        <Avatar className="h-5 w-5 mr-1.5">
                          <AvatarFallback>
                            {request.requestedBy.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {request.requestedBy}
                      </Flex>
                    </div>

                    <Flex justify="end" gap="sm">
                      <Button variant="outline" size="sm">
                        Chat
                      </Button>
                      <Button size="sm">View Details</Button>
                    </Flex>
                  </div>
                ))}

                {acceptedRequests.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      You haven't accepted any requests yet.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContainer>

        <div className="space-y-6">
          <CardContainer>
            <h3 className="text-lg font-medium mb-4">Quick Stats</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary/5 p-4">
                <Flex align="center" className="mb-1 text-primary">
                  <UserCheck className="h-4 w-4 mr-1.5" />
                  <span className="text-sm font-medium">Completed</span>
                </Flex>
                <p className="text-2xl font-semibold">12</p>
                <p className="text-xs text-muted-foreground">Requests</p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <Flex align="center" className="mb-1 text-muted-foreground">
                  <Users className="h-4 w-4 mr-1.5" />
                  <span className="text-sm font-medium">People Helped</span>
                </Flex>
                <p className="text-2xl font-semibold">8</p>
                <p className="text-xs text-muted-foreground">Individuals</p>
              </div>
            </div>
          </CardContainer>

          <CardContainer>
            <Flex justify="between" align="center" className="mb-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <Badge variant="outline">3 New</Badge>
            </Flex>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted">
                <Bell className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">
                    New request within 2 miles of your location
                  </p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted">
                <Bell className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">
                    Your volunteer status has been verified
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted">
                <Bell className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">You received a thank you from Jane</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4 text-sm">
              View All Notifications
            </Button>
          </CardContainer>
        </div>
      </Grid>
    </div>
  );
};

export default VolunteerDashboard;
