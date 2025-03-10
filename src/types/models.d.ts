declare namespace Model {
  interface BaseModel {
    id: string;
    start: Date;
    end: Date;
  }

  interface User extends BaseModel {
    username: string;
    githubName: string;
  }

  interface Event extends BaseModel {
    title: string;
    eventType?: string;
    path?: string;
    originalContent?: string;
    allDay: boolean;
    originalEventId?: string;
    recurrenceRule?: string;
    blockLink?: string;
  }

  interface Query extends BaseModel {
    title: string;
    querystring: string;
    pinnedAt: string;
  }

  interface Resource {
    id: string;
    filename: string;
    type: string;
    size: string;
    createdAt: string;
  }
}
