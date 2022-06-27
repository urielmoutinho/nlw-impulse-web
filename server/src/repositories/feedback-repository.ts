export interface ICreateFeedback{
    type: string
    comment: string
    screenshot?: string
}
export interface FeedBackRepository{
    create(data:ICreateFeedback):Promise<void>
}