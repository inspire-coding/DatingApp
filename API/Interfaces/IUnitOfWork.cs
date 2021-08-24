using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepostory { get; }
        IMessageRepository MessageRepostory { get; }
        ILikesRepository LikesRepostory { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}