import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        plan: v.union(v.literal('free'), v.literal("pro")),
        projectsUsed: v.number(),
        exportsThisMonth: v.number(),
        createdAt: v.number(),
        lastActiveAt: v.number(),
        tokenIdentifier: v.string(),
        imageUrl: v.string()
    }).index("by_token", ["tokenIdentifier"]),

    projects: defineTable({
        //basic project details
        title: v.string(),
        userId: v.id('users'),

        //canvas dimension and state
        canvasState: v.any(),
        width: v.any(),
        height: v.any(),

        //image pipeline - to track image transformations
        originalImageUrl: v.optional(v.string()), //initial uploaded image
        currentImageUrl: v.optional(v.string()), // current processed image
        thumbnailUrl: v.optional(v.string()),  //hw - small preview for dashboard

        //ImageKit transformation state
        activeTransformations: v.optional(v.string()), //current ImageKit url params

        //AI featured state - track what ai processing has been applied
        backgroundRemoved: v.optional(v.boolean()),

        //organization
        folderId: v.optional(v.id("folders")),  //optional folder organization

        //timestamps
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_user", ['userId'])
        .index("by_user_updated", ['userId', "updatedAt"])
        .index("by_folder", ['folderId']),

    folders: defineTable({
        name: v.string(),
        userId: v.id('users'),
        createdAt: v.number(),
    }).index("by_user", ["userId"])
})

// -frame- 3 projects, 20 exports/month, basic features only
// -pro: unlimited projects/exports, all AI feature