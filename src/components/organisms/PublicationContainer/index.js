import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getAllPostings,
  getLikedPostings,
} from "../../../actions/postingsActions";
import Publication from "../../molecules/Publication";
import Modal from "../../atoms/Modal";
import ContactForm from "../../molecules/ContactForm";

const PublicacionContainer = ({
  postings,
  loadingPostings,
  likedPosts,
  filteredPostings,
  searchKeyword,
  _getAllPost,
  _getLikedPostings,
}) => {
  const [currentPost, setCurrentPost] = useState(null);
  const [renderPosts, setRenderPosts] = useState(null);
  const [contactModal, setContactModal] = useState(false);

  useEffect(() => {
    _getAllPost();
    _getLikedPostings();
  }, [_getAllPost, _getLikedPostings]);

  useEffect(() => {
    const posts = filteredPostings ? filteredPostings : postings;
    const res = searchKeyword
      ? posts.filter((post) => {
          return post.posting_location.address
            .toLowerCase()
            .includes(searchKeyword.toLowerCase());
        })
      : posts;
    setRenderPosts(res);
  }, [postings, filteredPostings, searchKeyword]);

  const handleContact = (post) => {
    setCurrentPost(post);
    setContactModal(true);
  };

  const onContactSuccess = () => {
    setCurrentPost(null);
    setContactModal(false);
  };

  const isLikedPost = (post) => {
    const res = likedPosts.filter((item) => item === post.posting_id);
    return !!res.length;
  };

  if (loadingPostings) return <div>Cargando publicaciones...</div>;

  return (
    <ContentLayout>
      {currentPost && (
        <Modal isOpen={contactModal} onClose={() => setContactModal(false)}>
          <h4 className="formHeader">Formulario de Contacto</h4>
          <h5 className="formSubtitle">
            Complete sus datos en el formulario y nos contactaremos a la
            brevedad
          </h5>
          <div className="formPostTitle">{currentPost.title}</div>
          <ContactForm
            post_id={currentPost.publicationId}
            onSuccess={onContactSuccess}
          />
        </Modal>
      )}
      {renderPosts.length ? (
        renderPosts.map((item) => (
          <Publication
            key={item.posting_id}
            post={item}
            liked={isLikedPost(item)}
            handleContact={handleContact}
            getLikedPosts={_getLikedPostings}
          />
        ))
      ) : (
        <div>No hay publicaciones!</div>
      )}
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  .formHeader {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .formPostTitle {
    margin: 1rem 0;
    font-weight: bold;
    color: #00b7ff;
  }
`;

const mapStateToProps = ({ postings }) => postings;

const mapDispatchToProps = (dispatch) => {
  return {
    _getAllPost: () => dispatch(getAllPostings()),
    _getLikedPostings: () => dispatch(getLikedPostings()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicacionContainer);
