import AxiosPOST from './Functions/AxiosPOST';

export const isAuthenticated = async () => {
  const userId = localStorage.getItem('user');

  if (userId !== 'undefined' && userId != null) {
    const bodyFormData = new FormData();
    bodyFormData.set('token', userId);

    const response = await AxiosPOST(
      '/oauth/check_token',
      bodyFormData,
      'Basic ckJDV0dMWkR2bTp5alNFTkxTU243c21iT1VNT3FBVFJVMlBMRDFZV2RBNw=='
    );

    if (response.status === 200 || response.status === 201) {
      return true;
    }
  }

  return false;
};
