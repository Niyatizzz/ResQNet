import {
  Building2,
  Users,
  AlertTriangle,
  Package,
  Truck,
  ArrowUpDown,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContainer, Flex, Grid } from "@/components/ui/containers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data for requests
const allRequests = [
  {
    id: 1,
    type: "Food",
    status: "pending",
    location: "1234 Park Ave",
    requestedAt: "10 minutes ago",
    urgency: "high",
  },
  {
    id: 2,
    type: "Medical Aid",
    status: "assigned",
    location: "5678 Main St",
    requestedAt: "15 minutes ago",
    urgency: "medium",
    assignedTo: "John Smith",
  },
  {
    id: 3,
    type: "Shelter",
    status: "completed",
    location: "910 Oak Dr",
    requestedAt: "30 minutes ago",
    urgency: "low",
    assignedTo: "Maria Garcia",
  },
  {
    id: 4,
    type: "Medical Aid",
    status: "pending",
    location: "321 Pine Rd",
    requestedAt: "1 hour ago",
    urgency: "high",
  },
];

// Sample data for resources
const resources = [
  {
    id: 1,
    name: "Emergency Food Kits",
    quantity: 45,
    status: "available",
  },
  {
    id: 2,
    name: "Medical Supplies",
    quantity: 23,
    status: "available",
  },
  {
    id: 3,
    name: "Temporary Shelters",
    quantity: 7,
    status: "limited",
  },
  {
    id: 4,
    name: "Water Purification Tablets",
    quantity: 150,
    status: "available",
  },
  {
    id: 5,
    name: "Blankets",
    quantity: 5,
    status: "low",
  },
];

// Sample data for volunteers
const volunteers = [
  {
    id: 1,
    name: "John Smith",
    status: "active",
    assignments: 2,
  },
  {
    id: 2,
    name: "Maria Garcia",
    status: "active",
    assignments: 1,
  },
  {
    id: 3,
    name: "David Chen",
    status: "inactive",
    assignments: 0,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    status: "active",
    assignments: 0,
  },
];

const OrganizationDashboard = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-warning/10 text-warning border-warning/20"
          >
            Pending
          </Badge>
        );
      case "assigned":
        return (
          <Badge
            variant="outline"
            className="bg-info/10 text-info border-info/20"
          >
            Assigned
          </Badge>
        );
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-success/10 text-success border-success/20"
          >
            Completed
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getResourceStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge
            variant="outline"
            className="bg-success/10 text-success border-success/20"
          >
            Available
          </Badge>
        );
      case "limited":
        return (
          <Badge
            variant="outline"
            className="bg-warning/10 text-warning border-warning/20"
          >
            Limited
          </Badge>
        );
      case "low":
        return (
          <Badge
            variant="outline"
            className="bg-urgent/10 text-urgent border-urgent/20"
          >
            Low
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getVolunteerStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="outline"
            className="bg-success/10 text-success border-success/20"
          >
            Active
          </Badge>
        );
      case "inactive":
        return (
          <Badge
            variant="outline"
            className="bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20"
          >
            Inactive
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
              <h2 className="text-2xl font-medium">Organization Dashboard</h2>
              <Badge
                variant="outline"
                className="ml-2 bg-primary/10 text-primary border-primary/20"
              >
                Administrator
              </Badge>
            </Flex>
            <p className="text-muted-foreground">
              Monitor and manage crisis response resources
            </p>
          </div>
          <Button>
            <Package className="mr-2 h-4 w-4" />
            Add Resources
          </Button>
        </Flex>
      </CardContainer>

      <Grid cols={1} className="lg:grid-cols-4 gap-6">
        <CardContainer className="bg-secondary lg:col-span-1">
          <Flex align="center" gap="sm" className="mb-1">
            <div className="p-2 rounded-md bg-primary/10">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Pending Requests</h3>
          </Flex>
          <p className="text-3xl font-bold">
            {allRequests.filter((r) => r.status === "pending").length}
          </p>
          <p className="text-sm text-muted-foreground">
            Needs immediate attention
          </p>
        </CardContainer>

        <CardContainer className="bg-secondary lg:col-span-1">
          <Flex align="center" gap="sm" className="mb-1">
            <div className="p-2 rounded-md bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Active Volunteers</h3>
          </Flex>
          <p className="text-3xl font-bold">
            {volunteers.filter((v) => v.status === "active").length}
          </p>
          <p className="text-sm text-muted-foreground">Ready to assist</p>
        </CardContainer>

        <CardContainer className="bg-secondary lg:col-span-1">
          <Flex align="center" gap="sm" className="mb-1">
            <div className="p-2 rounded-md bg-primary/10">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Resources</h3>
          </Flex>
          <p className="text-3xl font-bold">
            {resources.reduce((acc, r) => acc + r.quantity, 0)}
          </p>
          <p className="text-sm text-muted-foreground">Items available</p>
        </CardContainer>

        <CardContainer className="bg-secondary lg:col-span-1">
          <Flex align="center" gap="sm" className="mb-1">
            <div className="p-2 rounded-md bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Service Areas</h3>
          </Flex>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-muted-foreground">Locations covered</p>
        </CardContainer>
      </Grid>

      <Tabs defaultValue="requests">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="requests">All Requests</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="mt-4 animate-fade-in">
          <CardContainer>
            <Flex justify="between" align="center" className="mb-4">
              <h3 className="text-lg font-medium">Crisis Requests</h3>

              <Flex gap="sm">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search requests..."
                    className="w-[250px] pl-9"
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Newest First</DropdownMenuItem>
                    <DropdownMenuItem>Oldest First</DropdownMenuItem>
                    <DropdownMenuItem>Highest Urgency</DropdownMenuItem>
                    <DropdownMenuItem>Status</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Flex>
            </Flex>

            <div className="rounded-md border">
              <div className="grid grid-cols-5 bg-muted px-4 py-3 text-sm font-medium">
                <div>Type</div>
                <div>Location</div>
                <div>Requested</div>
                <div>Status</div>
                <div className="text-right">Actions</div>
              </div>

              <div className="divide-y">
                {allRequests.map((request) => (
                  <div
                    key={request.id}
                    className="grid grid-cols-5 px-4 py-3 text-sm"
                  >
                    <div className="flex items-center">
                      <span>{request.type}</span>
                      {request.urgency === "high" && (
                        <Badge className="ml-2 bg-urgent/10 text-urgent border-urgent/20">
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <div className="text-muted-foreground">
                      {request.location}
                    </div>
                    <div className="text-muted-foreground">
                      {request.requestedAt}
                    </div>
                    <div>
                      {getStatusBadge(request.status)}
                      {request.assignedTo && (
                        <div className="text-xs text-muted-foreground mt-1">
                          Assigned to: {request.assignedTo}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {request.status === "pending" && (
                        <Button size="sm">Assign</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContainer>
        </TabsContent>

        <TabsContent value="resources" className="mt-4 animate-fade-in">
          <CardContainer>
            <Flex justify="between" align="center" className="mb-4">
              <h3 className="text-lg font-medium">Resource Inventory</h3>

              <Flex gap="sm">
                <Button variant="outline" size="sm">
                  <Truck className="mr-2 h-4 w-4" />
                  Dispatch Resources
                </Button>

                <Button size="sm">
                  <Package className="mr-2 h-4 w-4" />
                  Add Resources
                </Button>
              </Flex>
            </Flex>

            <div className="rounded-md border">
              <div className="grid grid-cols-4 bg-muted px-4 py-3 text-sm font-medium">
                <div>Resource Name</div>
                <div>Quantity</div>
                <div>Status</div>
                <div className="text-right">Actions</div>
              </div>

              <div className="divide-y">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="grid grid-cols-4 px-4 py-3 text-sm"
                  >
                    <div>{resource.name}</div>
                    <div className="text-muted-foreground">
                      {resource.quantity} units
                    </div>
                    <div>{getResourceStatusBadge(resource.status)}</div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                      <Button size="sm">Dispatch</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContainer>
        </TabsContent>

        <TabsContent value="volunteers" className="mt-4 animate-fade-in">
          <CardContainer>
            <Flex justify="between" align="center" className="mb-4">
              <h3 className="text-lg font-medium">Volunteer Management</h3>

              <Button size="sm">
                <Users className="mr-2 h-4 w-4" />
                Add Volunteer
              </Button>
            </Flex>

            <div className="rounded-md border">
              <div className="grid grid-cols-4 bg-muted px-4 py-3 text-sm font-medium">
                <div>Name</div>
                <div>Status</div>
                <div>Current Assignments</div>
                <div className="text-right">Actions</div>
              </div>

              <div className="divide-y">
                {volunteers.map((volunteer) => (
                  <div
                    key={volunteer.id}
                    className="grid grid-cols-4 px-4 py-3 text-sm"
                  >
                    <div>{volunteer.name}</div>
                    <div>{getVolunteerStatusBadge(volunteer.status)}</div>
                    <div className="text-muted-foreground">
                      {volunteer.assignments}{" "}
                      {volunteer.assignments === 1 ? "request" : "requests"}
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Profile
                      </Button>
                      <Button size="sm">Assign</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrganizationDashboard;
